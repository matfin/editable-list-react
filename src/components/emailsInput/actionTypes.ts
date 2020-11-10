import { EmailAddress } from 'models';

enum ActionTypes {
  CREATE_EMAIL_ADDRESS = '@emailsInput/CREATE_EMAIL_ADDRESS',
  DELETE_EMAIL_ADDRESS = '@emailsInput/DELETE_EMAIL_ADDRESS',
  RESET_EMAIL_ADDRESS = '@emailsInput/RESET_EMAIL_ADDRESS',
  UPDATE_EMAIL_ADDRESS = '@emailsInput/UPDATE_EMAIL_ADDRESS',
}

export interface CreateEmailAddress {
  type: ActionTypes.CREATE_EMAIL_ADDRESS;
}

export interface DeleteEmailAddress {
  type: ActionTypes.DELETE_EMAIL_ADDRESS;
  payload: EmailAddress;
}

export interface ResetEmailAddress {
  type: ActionTypes.RESET_EMAIL_ADDRESS;
}

export interface UpdateEmailAddress {
  type: ActionTypes.UPDATE_EMAIL_ADDRESS;
  payload: string;
}

export type EmailsInputActionTypes =
  | CreateEmailAddress
  | DeleteEmailAddress
  | ResetEmailAddress
  | UpdateEmailAddress;

export default ActionTypes;
