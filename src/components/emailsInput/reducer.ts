import { v4 as uuid } from 'uuid';
import { Action, EmailAddress, EmailsInputState } from 'models';
import { isValidEmail } from 'utils';
import ActionTypes from './actionTypes';

export const defaultState: EmailsInputState = {
  emailAddresses: [],
  email: '',
};

const reducer = (
  state = defaultState,
  action: Action,
): EmailsInputState => {
  const { payload, type } = action;

  switch(type) {
    case ActionTypes.CREATE_EMAIL_ADDRESS: {
      const { email } = state;
      const id = uuid();
      const newEmailAddress: EmailAddress = {
        email,
        id,
        isValid: isValidEmail(email),
      };

      return {
        ...state,
        emailAddresses: [...state.emailAddresses, newEmailAddress]
      };
    }

    case ActionTypes.DELETE_EMAIL_ADDRESS: {
      const { emailAddresses } = state;
      const emailAddress = payload as EmailAddress;
      const updatedEmailAddresses: EmailAddress[] = emailAddresses.filter((item: EmailAddress) => item.id !== emailAddress.id);

      return {
        ...state,
        emailAddresses: [...updatedEmailAddresses],
      };
    }

    case ActionTypes.RESET_EMAIL_ADDRESS: {
      return {
        ...state,
        email: '',
      };
    }

    case ActionTypes.UPDATE_EMAIL_ADDRESS: {
      const email = payload as string;
      return {
        ...state,
        email,
      };
    }
  }

  return state;
};

export default reducer;
