import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useKeyDown } from './useKeyDown';

describe('useKeyDown hook', (): void => {
  it('should run the callback on key down', (): void => {
    // given
    const spyCb = jest.fn();
    const keyEvent = { code: 'a', key: 'a' } as KeyboardEvent;

    // then
    renderHook((): void => useKeyDown(spyCb));
    fireEvent.keyDown(window, keyEvent);
    expect(spyCb).toHaveBeenCalled();
  });
});
