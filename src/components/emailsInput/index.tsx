import React, { useReducer } from 'react';
import emailsInputActions from './actions';
import emailsInputReducer, { defaultState } from './reducer';
import { useEmailAdded } from 'hooks';
import { EmailsInput } from './emailsInput';

const ContainerComponent = (): JSX.Element => {
  const [state, dispatch] = useReducer(emailsInputReducer, defaultState);
  const actions = emailsInputActions(dispatch);
  const { emailAddresses, email } = state;

  useEmailAdded(({ detail }: any): void => {
    actions.updateEmailAdress(detail);
    actions.createEmailAddress();
    actions.resetEmailAddress();
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
