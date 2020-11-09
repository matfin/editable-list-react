import React from 'react';
import { EmailAddress } from 'models';
import { Container, DeleteIcon, DeleteButton, Text } from './emailBlock.css';

export interface Props {
  className?: string;
  emailAddress: EmailAddress;
  onClickDelete: (emailAddress: EmailAddress) => void;
};

const EmailBlock = ({className, emailAddress, onClickDelete}: Props): JSX.Element => {
  const onButtonClick = (): void => onClickDelete(emailAddress);

  return (
    <Container className={className}>
      <Text>
        {emailAddress.email}
      </Text>
      <DeleteButton data-testid="delete" onClick={onButtonClick}>
        <DeleteIcon />
      </DeleteButton>
    </Container>
  );
};

export default EmailBlock;



