export interface EmailAddress {
  email: string;
  id: string;
  isValid: boolean;
}

export interface EmailAddedEventProps {
  detail: {
    email: string;
    listId: string;
  }
}
