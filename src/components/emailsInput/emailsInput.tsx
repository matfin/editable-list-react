import React from 'react';
import { EmailAddress, ShortcutKeys } from 'models';
import { useKeyDown } from 'hooks';
import { BoxItem, Container, InputBox } from './emailsInput.css';
import EmailBlock from 'components/emailBlock';

export interface Props {
  email: string;
  emailAddresses: EmailAddress[],
  createEmailAddress: () => void;
  deleteEmailAddress: (emailAddress: EmailAddress) => void;
  resetEmailAddress: () => void;
  updateEmailAddress: (email: string) => void;
}

export const EmailsInput = ({
  email,
  emailAddresses,
  createEmailAddress,
  deleteEmailAddress,
  resetEmailAddress,
  updateEmailAddress,
}: Props): JSX.Element => {
  const onInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => updateEmailAddress(value);

  const saveEmailAddress = () => {
    if (email.length > 0) {
      createEmailAddress();
      resetEmailAddress();
    }
  };

  useKeyDown((e: KeyboardEvent): void => {
    const { key } = e;

    switch(key) {
      case ShortcutKeys.COMMA:
      case ShortcutKeys.ENTER: {
        e.preventDefault();
        saveEmailAddress();
        break;
      }
    }
  });

  return (
    <Container>
      {emailAddresses.map(
        (item: EmailAddress): JSX.Element => (
          <BoxItem key={item.id}>
            <EmailBlock
              emailAddress={item}
              onClickDelete={deleteEmailAddress}
            />
          </BoxItem>
        )
      )}
      <BoxItem>
        <InputBox
          onInputBlur={saveEmailAddress}
          onInputChange={onInputChange}
          placeholder="add more people..."
          shouldFocus
          value={email}
        />
      </BoxItem>
    </Container>
  );
};
