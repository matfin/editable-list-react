import React from 'react';
import ReactDOM from 'react-dom';
import EmailsInput from 'components/emailsInput';

const TestEmailsInput = (attachTo: HTMLElement): void => {
  ReactDOM.render(<EmailsInput />, attachTo);
};

window.TestEmailsInput = TestEmailsInput;
