type FieldName = 'name' | 'email' | 'subject' | 'message';
type FormState = 'idle' | 'sending' | 'success' | 'validation' | 'server';
type ContactPayload = Record<FieldName | 'website', string>;

type ApiResponse = {
  success?: boolean;
  errors?: Partial<Record<FieldName, string>>;
};

const fieldNames: FieldName[] = ['name', 'email', 'subject', 'message'];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
  const copy = {
    button: form.dataset.button ?? '',
    sending: form.dataset.sending ?? '',
    success: form.dataset.success ?? '',
    validation: form.dataset.validation ?? '',
    server: form.dataset.server ?? '',
    required: form.dataset.required ?? '',
    name: form.dataset.errorName ?? '',
    email: form.dataset.errorEmail ?? '',
    subject: form.dataset.errorSubject ?? '',
    message: form.dataset.errorMessage ?? '',
  };

  let isSubmitting = false;
  let currentState: FormState = 'idle';

  const setButtonText = () => {
    if (submitButton) submitButton.textContent = isSubmitting ? copy.sending : copy.button;
  };

  const setStatus = (state: FormState) => {
    currentState = state;
    if (!status) return;
    status.dataset.state = state;
    status.textContent = state === 'idle' ? '' : copy[state];
  };

  const clearFieldError = (name: FieldName) => {
    fields[name].removeAttribute('aria-invalid');
    if (errorElements[name]) errorElements[name].textContent = '';
  };

  const setFieldError = (name: FieldName, message: string) => {
    fields[name].setAttribute('aria-invalid', 'true');
    if (errorElements[name]) errorElements[name].textContent = message;
  };

  const validateField = (name: FieldName): string | null => {
    const value = fields[name].value.trim();
    if (!value) return copy.required;
    if (name === 'name' && (value.length < 2 || value.length > 80)) return copy.name;
    if (name === 'email' && (value.length > 254 || !emailPattern.test(value))) return copy.email;
    if (name === 'subject' && (value.length < 3 || value.length > 120)) return copy.subject;
    if (name === 'message' && (value.length < 10 || value.length > 3000)) return copy.message;
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
            if (result.errors[name]) setFieldError(name, copy[name]);
          }
          setStatus('validation');
        } else {
          setStatus('server');
        }
        return;
      }

      form.reset();
      fieldNames.forEach(clearFieldError);
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