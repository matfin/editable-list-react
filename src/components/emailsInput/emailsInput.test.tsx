import React from 'react';
import { render } from '@testing-library/react';
import EmailsInput from '.';

describe('EmailsInput tests', (): void => {
  it('renders the component', (): void => {
    expect(render(<EmailsInput />)).toBeTruthy();
  });
});
