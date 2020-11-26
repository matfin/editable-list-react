import React, { useReducer } from 'react';
import { EmailAddedEventProps } from 'models';
import emailsInputActions from './actions';
import emailsInputReducer, { defaultState } from './reducer';
import { useEmailAdded } from 'hooks';
import { EmailsInput } from './emailsInput';

interface Props {
  listId: string;
};

const ContainerComponent = ({ listId }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(emailsInputReducer, defaultState);
  const actions = emailsInputActions(dispatch);
  const { emailAddresses, email } = state;

  useEmailAdded(({ detail }: EmailAddedEventProps): void => {
    const { email, listId: id } = detail;

    if (id === listId) {
      actions.updateEmailAdress(email);
      actions.createEmailAddress();
      actions.resetEmailAddress();
    }
  });

  return (
    <EmailsInput
      email={email}
      emailAddresses={emailAddresses}
      batchCreateEmailAddresses={actions.batchCreateEmailAddresses}
      createEmailAddress={actions.createEmailAddress}
      deleteEmailAddress={actions.deleteEmailAddress}
      resetEmailAddress={actions.resetEmailAddress}
      updateEmailAddress={actions.updateEmailAdress}
    />
  );
};

export default ContainerComponent;
