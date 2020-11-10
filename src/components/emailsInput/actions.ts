import { Action, EmailAddress } from 'models';
import ActionTypes from './actionTypes';

const actions = (dispatch: React.Dispatch<Action>) => ({
  createEmailAddress: () => dispatch({
    type: ActionTypes.CREATE_EMAIL_ADDRESS,
  }),

  deleteEmailAddress: (emailAddress: EmailAddress) => dispatch({
    type: ActionTypes.DELETE_EMAIL_ADDRESS,
    payload: emailAddress,
  }),

  resetEmailAddress: () => dispatch({
    type: ActionTypes.RESET_EMAIL_ADDRESS,
  }),

  updateEmailAdress: (email: string) => dispatch({
    type: ActionTypes.UPDATE_EMAIL_ADDRESS,
    payload: email,
  }),
});

export default actions;
