import React from 'react';
import { EmailAddress } from 'models';
import { Container, EmailItem } from './emailsInput.css';
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

const EmailsInput = (): JSX.Element => (
  <Container>
    {data.map(
      (item: EmailAddress): JSX.Element => (
        <EmailItem key={item.id}>
          <EmailBlock
            emailAddress={item}
            onClickDelete={console.log}
          />
        </EmailItem>
      )
    )}
  </Container>
);

export default EmailsInput;
