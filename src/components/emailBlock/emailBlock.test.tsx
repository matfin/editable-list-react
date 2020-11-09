import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EmailAddress } from 'models';
import EmailBlock, { Props } from '.';

describe('EmailBlock tests', (): void => {
  const defaultProps: Props = {
    emailAddress: {
      email: 'test@test.nl',
      id: '123'
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
      id: '123'
    });
  });
});
