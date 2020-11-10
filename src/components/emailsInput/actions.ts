import { Action, EmailAddress } from 'models';
import ActionTypes from './actionTypes';

const actions = (dispatch: React.Dispatch<Action>) => ({
  batchCreateEmailAddresses: (): void => dispatch({
    type: ActionTypes.BATCH_CREATE_EMAIL_ADDRESS,
  }),

  createEmailAddress: () => dispatch({
    type: ActionTypes.CREATE_EMAIL_ADDRESS,
  }),

  deleteEmailAddress: (emailAddress: EmailAddress): void => dispatch({
    type: ActionTypes.DELETE_EMAIL_ADDRESS,
    payload: emailAddress,
  }),

  resetEmailAddress: (): void => dispatch({
    type: ActionTypes.RESET_EMAIL_ADDRESS,
  }),

  updateEmailAdress: (email: string): void => dispatch({
    type: ActionTypes.UPDATE_EMAIL_ADDRESS,
    payload: email,
  }),
});

export default actions;
