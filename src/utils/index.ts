import { EmailAddedEventProps } from 'models';

export const isValidEmail = (email?: string): boolean => {
  const re: RegExp = RegExp(/(.+)@(.+){2,}\.(.+){2,}/);

  return re.test(email ?? '');
};

export const publishEvent = (name: string, payload: EmailAddedEventProps): void => {
  const event: CustomEvent = new CustomEvent(name, payload);

  window.dispatchEvent(event);
};
