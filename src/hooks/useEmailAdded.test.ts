import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useEmailAdded } from './useEmailAdded';

describe('useEmailAdded hook', (): void => {
  it('should run the callback when the custom event is fired', (): void => {
    // given
    const spyCb = jest.fn();
    const event = { detail: 'test@test.nl', listId: '123' };

    // then
    renderHook((): void => useEmailAdded(spyCb));
    fireEvent(window, new CustomEvent('emails:add', event));
    expect(spyCb).toHaveBeenCalled();
  });
});
