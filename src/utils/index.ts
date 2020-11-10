export const isValidEmail = (email?: string): boolean => {
  const re: RegExp = RegExp(/(.+)@(.+){2,}\.(.+){2,}/);

  return re.test(email ?? '');
};
