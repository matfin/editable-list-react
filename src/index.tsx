import React from 'react';
import ReactDOM from 'react-dom';
import EmailsInput from 'components/emailsInput';

interface Bridge {
  addEmailAddress?(email: string): void;
  getEmailCount?(): number;
}

const init = (attachTo: HTMLElement, optimised: boolean): Promise<Bridge> => new Promise((resolve): void => {
  const bridge: Bridge = {};
  const cmp: JSX.Element = <EmailsInput bridge={bridge} optimised={optimised} />

  ReactDOM.render(cmp, attachTo, (): void => resolve(bridge));
});

window.emailBoard = {
  init
};
