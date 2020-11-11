import React from 'react';
import ReactDOM from 'react-dom';
import { publishEvent } from 'utils';
import EmailsInput from 'components/emailsInput';

const init = (attachTo: HTMLElement): void => {
  ReactDOM.render(<EmailsInput />, attachTo);
};

const addRandomEmail = (email: string): void => {
  publishEvent('emails:add', { detail: email });
};

window.emailBoard = {
  init,
  addRandomEmail,
}
