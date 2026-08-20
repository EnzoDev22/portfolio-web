type Language = 'es' | 'en';
type FieldName = 'name' | 'email' | 'subject' | 'message';
type FormState = 'idle' | 'sending' | 'success' | 'validation' | 'server';

type ContactPayload = Record<FieldName | 'website', string>;

type ApiResponse = {
  success?: boolean;
  errors?: Partial<Record<FieldName, string>>;
};

const copy = {
  es: {
    button: 'Enviar mensaje',
    sending: 'Enviando…',
    success: 'Tu mensaje fue enviado. Gracias por escribirme.',
    validation: 'Revisá los campos indicados antes de enviar.',
    server: 'No pude enviar el mensaje en este momento. Intentá nuevamente.',
    required: 'Este campo es obligatorio.',
    name: 'Ingresá un nombre de entre 2 y 80 caracteres.',
    email: 'Ingresá un correo electrónico válido.',
    subject: 'Ingresá un asunto de entre 3 y 120 caracteres.',
    message: 'El mensaje debe tener entre 10 y 3000 caracteres.',
  },
  en: {
    button: 'Send message',
    sending: 'Sending…',
    success: 'Your message was sent. Thank you for reaching out.',
    validation: 'Please review the highlighted fields before sending.',
    server: 'I could not send your message right now. Please try again.',
    required: 'This field is required.',
    name: 'Enter a name between 2 and 80 characters.',
    email: 'Enter a valid email address.',
    subject: 'Enter a subject between 3 and 120 characters.',
    message: 'The message must be between 10 and 3000 characters.',
  },
} as const;

const fieldNames: FieldName[] = ['name', 'email', 'subject', 'message'];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const root = document.documentElement;
const form = document.querySelector<HTMLFormElement>('.contact-form');

if (form) {
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const status = form.querySelector<HTMLElement>('.form-status');
  const fields = Object.fromEntries(
    fieldNames.map((name) => [name, form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement]),
  ) as Record<FieldName, HTMLInputElement | HTMLTextAreaElement>;
  const errorElements = Object.fromEntries(
    fieldNames.map((name) => [name, form.querySelector<HTMLElement>(`[data-error-for="${name}"]`)]),
  ) as Record<FieldName, HTMLElement | null>;

  let isSubmitting = false;
  let currentState: FormState = 'idle';

  const getLanguage = (): Language => root.dataset.lang === 'en' ? 'en' : 'es';

  const setButtonText = () => {
    if (!submitButton) return;
    const language = getLanguage();
    const value = isSubmitting ? copy[language].sending : copy[language].button;
    submitButton.querySelector<HTMLElement>(`.lang-${language}`)!.textContent = value;
  };

  const updateLocalizedContent = () => {
    const language = getLanguage();
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-placeholder-es]').forEach((field) => {
      field.placeholder = field.dataset[language === 'en' ? 'placeholderEn' : 'placeholderEs'] ?? '';
    });
    for (const name of fieldNames) {
      if (fields[name].hasAttribute('aria-invalid')) {
        const error = validateField(name) ?? copy[language][name];
        if (errorElements[name]) errorElements[name]!.textContent = error;
      }
    }
    setButtonText();
    if (status && currentState !== 'idle') status.textContent = copy[language][currentState];
  };

  const setStatus = (state: FormState) => {
    currentState = state;
    if (!status) return;
    status.dataset.state = state;
    status.textContent = state === 'idle' ? '' : copy[getLanguage()][state];
  };

  const clearFieldError = (name: FieldName) => {
    fields[name].removeAttribute('aria-invalid');
    if (errorElements[name]) errorElements[name]!.textContent = '';
  };

  const setFieldError = (name: FieldName, message: string) => {
    fields[name].setAttribute('aria-invalid', 'true');
    if (errorElements[name]) errorElements[name]!.textContent = message;
  };

  const validateField = (name: FieldName): string | null => {
    const language = getLanguage();
    const value = fields[name].value.trim();
    if (!value) return copy[language].required;
    if (name === 'name' && (value.length < 2 || value.length > 80)) return copy[language].name;
    if (name === 'email' && (value.length > 254 || !emailPattern.test(value))) return copy[language].email;
    if (name === 'subject' && (value.length < 3 || value.length > 120)) return copy[language].subject;
    if (name === 'message' && (value.length < 10 || value.length > 3000)) return copy[language].message;
    return null;
  };

  const validateForm = () => {
    let valid = true;
    for (const name of fieldNames) {
      clearFieldError(name);
      const error = validateField(name);
      if (error) {
        setFieldError(name, error);
        valid = false;
      }
    }
    return valid;
  };

  for (const name of fieldNames) {
    fields[name].addEventListener('input', () => {
      clearFieldError(name);
      if (currentState === 'validation') setStatus('idle');
    });
  }

  new MutationObserver(updateLocalizedContent).observe(root, { attributes: true, attributeFilter: ['data-lang'] });
  updateLocalizedContent();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      setStatus('validation');
      fields[fieldNames.find((name) => fields[name].hasAttribute('aria-invalid')) ?? 'name'].focus();
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(
      [...fieldNames, 'website'].map((name) => [name, String(formData.get(name) ?? '').trim()]),
    ) as ContactPayload;

    isSubmitting = true;
    if (submitButton) submitButton.disabled = true;
    setStatus('sending');
    setButtonText();

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({})) as ApiResponse;

      if (!response.ok || result.success !== true) {
        if (response.status === 400 && result.errors) {
          for (const name of fieldNames) {
            if (result.errors[name]) setFieldError(name, copy[getLanguage()][name]);
          }
          setStatus('validation');
        } else {
          setStatus('server');
        }
        return;
      }

      form.reset();
      fieldNames.forEach(clearFieldError);
      updateLocalizedContent();
      setStatus('success');
    } catch {
      setStatus('server');
    } finally {
      isSubmitting = false;
      if (submitButton) submitButton.disabled = false;
      setButtonText();
    }
  });
}
