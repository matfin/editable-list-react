import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { EmailAddress, ShortcutKeys } from 'models';
import { EmailsInput, Props } from './emailsInput';

describe('EmailsInput tests', (): void => {
  const emailAddresses: EmailAddress[] = [
    { id: '123', email: 'matt@test.one', isValid: true },
    { id: '456', email: 'matt@test.two', isValid: true },
  ];

  const spyBatchCreateEmailAddresses = jest.fn();
  const spyCreateEmailAddress = jest.fn();
  const spyDeleteEmailAddress = jest.fn();
  const spyResetEmailAddress = jest.fn();
  const spyUpdateEmailAddress = jest.fn();

  const defaultProps: Props = {
    email: '',
    emailAddresses: [],
    batchCreateEmailAddresses: spyBatchCreateEmailAddresses,
    createEmailAddress: spyCreateEmailAddress,
    deleteEmailAddress: spyDeleteEmailAddress,
    resetEmailAddress: spyResetEmailAddress,
    updateEmailAddress: spyUpdateEmailAddress,
  };

  beforeEach((): void => {
    spyBatchCreateEmailAddresses.mockClear();
    spyCreateEmailAddress.mockClear();
    spyDeleteEmailAddress.mockClear();
    spyResetEmailAddress.mockClear();
    spyUpdateEmailAddress.mockClear();
  });

  it('renders the component with email addresses', (): void => {
    // given
    const { getByText } = render(<EmailsInput {...defaultProps} emailAddresses={emailAddresses}  />);

    // then
    expect(getByText('matt@test.one')).toBeTruthy();
    expect(getByText('matt@test.two')).toBeTruthy();
  });

  it('calls to delete an email address', (): void => {
    // given
    const { getByTestId } = render(<EmailsInput {...defaultProps} emailAddresses={[emailAddresses[0]]}  />)
    const button = getByTestId('delete');

    // then
    fireEvent.click(button);
    expect(spyDeleteEmailAddress).toHaveBeenCalledWith(emailAddresses[0]);
  });

  it('calls to update an email address on input change, then saves on press of comma or enter', async (): Promise<void> => {
    // given
    const { getByTestId } = render(
      <EmailsInput {...defaultProps} email="test@test.ie" />
    );
    const input = getByTestId('input');

    // then
    fireEvent.change(input, { target: { value: 'a' } });
    expect(spyUpdateEmailAddress).toHaveBeenCalledWith('a');

    fireEvent.keyDown(window, { key: ShortcutKeys.ENTER });
    fireEvent.keyDown(window, { key: ShortcutKeys.COMMA });

    await waitFor((): void => {
      expect(spyCreateEmailAddress).toHaveBeenCalledTimes(2);
      expect(spyResetEmailAddress).toHaveBeenCalledTimes(2);
    });
  });

  it('calls to save email addresses as a batch when multiple comma separated emails are entered, then resets the email', async (): Promise<void> => {
    const { getByTestId } = render(
      <EmailsInput {...defaultProps} />
    );
    const input = getByTestId('input');
    const emails: string = 'one@test.com, two@test.com, three@test.com';

    // then
    fireEvent.change(input, { target: { value: emails } });

    await waitFor((): void => {
      expect(spyBatchCreateEmailAddresses).toHaveBeenCalled();
      expect(spyResetEmailAddress).toHaveBeenCalled();
    });
  });

  it('will not call to save an empty email address', async (): Promise<void> => {
    // given
    const { getByTestId } = render(
      <EmailsInput {...defaultProps} email="" />
    );

    // then
    fireEvent.keyDown(window, { key: ShortcutKeys.ENTER });

    await waitFor((): void => {
      expect(spyCreateEmailAddress).toHaveBeenCalledTimes(0);
      expect(spyResetEmailAddress).toHaveBeenCalledTimes(0);
    });
  });
});
