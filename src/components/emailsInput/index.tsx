import React from 'react';
import { EmailAddress } from 'models';
import { BoxItem, Container, InputBox } from './emailsInput.css';
import EmailBlock from 'components/emailBlock';

const data: EmailAddress[] = [
  {
    id: '123',
    email: 'matfin@gmail.com',
  },
  {
    id: '456',
    email: 'me@mattfinucane.com',
  },
  {
    id: '789',
    email: 'faeleah@gmail.com',
  },
  {
    id: '1011',
    email: 'matfin@hotmail.com',
  },
  {
    id: '1213',
    email: 'e@r.ru',
  },
];

const EmailsInput = (): JSX.Element => {
  const noop = (): void => {};

  return (
    <Container>
      {data.map(
        (item: EmailAddress): JSX.Element => (
          <BoxItem key={item.id}>
            <EmailBlock
              emailAddress={item}
              onClickDelete={noop}
            />
          </BoxItem>
        )
      )}
      <BoxItem>
        <InputBox
          onInputBlur={noop}
          onInputChange={noop}
          onInputFocus={noop}
          placeholder="add more people..."
          shouldFocus
        />
      </BoxItem>
    </Container>
  );
};

export default EmailsInput;
