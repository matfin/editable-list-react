import React from 'react';
import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';
import EmailBlock, { Props } from '.';
import { EmailAddress } from 'models';

describe('EmailBlock tests', (): void => {
  const defaultProps: Props = {
    emailAddress: {
      email: 'test@test.nl',
      id: '123',
      isValid: true,
    },
    onClickDelete: jest.fn(),
  };

  it('should render the comppnent with the correct details', (): void => {
    // given
    const { getByText } = render(<EmailBlock {...defaultProps} />);

    // then
    expect(getByText('test@test.nl')).toBeTruthy();
  });

  it('calls to delete an email address on click', (): void => {
    // given
    const spyOnClickDelete = jest.fn();
    const { getByTestId } = render(<EmailBlock {...defaultProps} onClickDelete={spyOnClickDelete} />);

    // then
    fireEvent.click(getByTestId('delete'));

    expect(spyOnClickDelete).toHaveBeenCalledWith({
      email: 'test@test.nl',
      id: '123',
      isValid: true,
    });
  });

  it('styles email blocks with invalid email addresses', (): void => {
    // given
    const invalidEmailAddress: EmailAddress = {
      email: 'invalid.email',
      id: '123',
      isValid: false,
    };
    const { getByTestId, getByText } = render(<EmailBlock {...defaultProps} emailAddress={invalidEmailAddress} />);
    const component = getByTestId('email-block');
    const text = getByText('invalid.email');

    // then
    expect(component).not.toHaveStyleRule('padding');
    expect(component).not.toHaveStyleRule('background');
    expect(component).not.toHaveStyleRule('border-radius');
    expect(text).toHaveStyleRule('border-bottom', '1px dashed #d92929');
  });
});
