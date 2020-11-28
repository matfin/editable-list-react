import React, { useEffect, useReducer } from 'react';
import emailsInputActions from './actions';
import emailsInputReducer, { defaultState } from './reducer';
import { EmailsInput } from './emailsInput';

interface Props {
  bridge: {
    addEmailAddress?(email: string): void;
    getEmailCount?(): number;
  };
  optimised?: boolean;
};

const ContainerComponent = ({ bridge, optimised }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(emailsInputReducer, defaultState);
  const actions = emailsInputActions(dispatch);
  const { emailAddresses, email } = state;

  useEffect((): void => {
    bridge.addEmailAddress = (email: string) => {
      actions.updateEmailAdress(email);
      actions.createEmailAddress();
      actions.resetEmailAddress();
    };
    bridge.getEmailCount = (): number => emailAddresses?.length ?? 0;
  }, [emailAddresses]);

  return (
    <EmailsInput
      email={email}
      emailAddresses={emailAddresses}
      optimised={optimised}
      batchCreateEmailAddresses={actions.batchCreateEmailAddresses}
      createEmailAddress={actions.createEmailAddress}
      deleteEmailAddress={actions.deleteEmailAddress}
      resetEmailAddress={actions.resetEmailAddress}
      updateEmailAddress={actions.updateEmailAdress}
    />
  );
};

export default ContainerComponent;
