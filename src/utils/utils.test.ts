import { isValidEmail } from '.';

describe('utils tests', (): void => {
  it('should validate an email address', (): void => {
    expect(isValidEmail('a')).toBe(false);
    expect(isValidEmail()).toBe(false);
    expect(isValidEmail('matfin@hotmail.com')).toBe(true);
    expect(isValidEmail('matt.finucane@miro.com')).toBe(true);
  });
});
