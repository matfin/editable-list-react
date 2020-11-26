import React from 'react';
import ReactDOM from 'react-dom';
import { publishEvent } from 'utils';
import EmailsInput from 'components/emailsInput';

const init = (attachTo: HTMLElement, listId: string): void => {
  const cmp: JSX.Element = <EmailsInput listId={listId} />;

  ReactDOM.render(cmp, attachTo);
};

const addRandomEmail = (email: string, listId: string): void => {
  publishEvent('emails:add', { detail: { email, listId } });
};

window.emailBoard = {
  init,
  addRandomEmail,
}
