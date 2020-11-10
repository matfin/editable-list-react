import React, { useEffect, useRef } from 'react';
import { Input } from './inputbox.css';

export interface Props {
  className?: string;
  onInputBlur(e: React.FocusEvent<HTMLInputElement>): void;
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onInputFocus(e: React.FocusEvent<HTMLInputElement>): void;
  placeholder?: string;
  shouldFocus?: boolean;
  value?: string;
}

const InputBox = ({ className, onInputBlur, onInputChange, onInputFocus, placeholder, shouldFocus, value }: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect((): void => {
    if (shouldFocus) {
      inputRef?.current?.focus();
    }
  }, [shouldFocus]);

  return (
    <Input
      className={className}
      data-testid="input"
      onBlur={onInputBlur}
      onChange={onInputChange}
      onFocus={onInputFocus}
      placeholder={placeholder}
      ref={inputRef}
      value={value}
    />
  );
};

export default InputBox;
