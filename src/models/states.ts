import { EmailAddress } from './interfaces';

export interface EmailsInputState {
  emailAddresses: EmailAddress[];
  email: string;
}

export interface Action {
  type: string;
  payload?: EmailAddress | string;
}
