import React, { useCallback } from 'react';
import { EmailAddress, ShortcutKeys } from 'models';
import { useKeyDown } from 'hooks';
import { BoxItem, Container, InputBox } from './emailsInput.css';
import EmailBlock, { Props as EmailBlockProps } from 'components/emailBlock';

export interface Props {
  email: string;
  emailAddresses: EmailAddress[];
  optimised?: boolean;
  batchCreateEmailAddresses: () => void;
  createEmailAddress: () => void;
  deleteEmailAddress: (emailAddress: EmailAddress) => void;
  resetEmailAddress: () => void;
  updateEmailAddress: (email: string) => void;
}

const MemoEmailBlock = React.memo(
  (props: EmailBlockProps): JSX.Element => <EmailBlock {...props} />
);

export const EmailsInput = ({
  email,
  emailAddresses,
  optimised = true,
  batchCreateEmailAddresses,
  createEmailAddress,
  deleteEmailAddress,
  resetEmailAddress,
  updateEmailAddress,
}: Props): JSX.Element => {
  const onInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const splitValues: string[] = value.split(',');

    updateEmailAddress(value);

    if (splitValues.length > 1) {
      batchCreateEmailAddresses();
      resetEmailAddress();
    }
  };

  const saveEmailAddress = () => {
    if (email.length > 0) {
      createEmailAddress();
      resetEmailAddress();
    }
  };

  const memoizedDeleteEmailAddress = useCallback(deleteEmailAddress, []);

  useKeyDown((e: KeyboardEvent): void => {
    const { key } = e;

    switch (key) {
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
            {optimised ? (
              <MemoEmailBlock
                emailAddress={item}
                onClickDelete={memoizedDeleteEmailAddress}
              />
            ) : (
              <EmailBlock
                emailAddress={item}
                onClickDelete={memoizedDeleteEmailAddress}
              />
            )}
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
