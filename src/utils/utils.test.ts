import { isValidEmail, publishEvent } from '.';

describe('utils tests', (): void => {
  it('should validate an email address', (): void => {
    expect(isValidEmail('a')).toBe(false);
    expect(isValidEmail()).toBe(false);
    expect(isValidEmail('matfin@hotmail.com')).toBe(true);
  });

  it('should call to dispatch a custom event', (): void => {
    // given
    const eventName = 'test:custom';

    window.dispatchEvent = jest.fn();

    // then
    publishEvent(eventName, { detail: 'test' });
    expect(window.dispatchEvent).toHaveBeenCalledWith(
      new CustomEvent(eventName, { detail: 'test' })
    );
  });
});
