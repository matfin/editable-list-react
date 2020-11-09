import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputBox, { Props } from '.';

describe('InputBox tests', (): void => {
  const defaultProps: Props = {
    onInputBlur: jest.fn(),
    onInputChange: jest.fn(),
    onInputFocus: jest.fn(),
  };

  it('should render the component with the correct placeholder', (): void => {
    // given
    const { getByTestId } = render(
      <InputBox
        {...defaultProps}
        placeholder="test"
      />
    );
    const input = getByTestId('input');

    // then
    expect(input.getAttribute('placeholder')).toEqual('test');
  });

  it('should execute the input event callbacks', (): void => {
    // given
    const spyOnInputBlur = jest.fn();
    const spyOnInputChange = jest.fn();
    const spyOnInputFocus = jest.fn();
    const { getByTestId } = render(
      <InputBox
        onInputBlur={spyOnInputBlur}
        onInputChange={spyOnInputChange}
        onInputFocus={spyOnInputFocus}
      />
    );
    const input = getByTestId('input');

    // then
    fireEvent.blur(input);
    fireEvent.change(input, { target: { value: 'Test' } });
    fireEvent.focus(input);

    expect(spyOnInputChange).toHaveBeenCalled();
    expect(spyOnInputBlur).toHaveBeenCalled();
    expect(spyOnInputFocus).toHaveBeenCalled();
  });

  it('should call to focus on the input', (): void => {
    // given
    const spyOnInputFocus = jest.fn();

    // then
    render(
      <InputBox
        {...defaultProps}
        onInputFocus={spyOnInputFocus}
        shouldFocus
      />
    );

    expect(spyOnInputFocus).toHaveBeenCalled();
  });
});
