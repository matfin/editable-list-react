import { EmailAddress, EmailsInputState } from 'models';
import ActionTypes from './actionTypes';
import reducer, { defaultState } from './reducer';

describe('reducer', (): void => {
  const dummyEmailAddress: EmailAddress = {
    id: '123',
    email: 'test@test.nl',
  };

  it('updates the state when creating an email address', (): void => {
    const state: EmailsInputState = reducer(
      {
        ...defaultState,
        email: 'test@test.ie',
      },
      {
        type: ActionTypes.CREATE_EMAIL_ADDRESS,
      }
    );

    const check: EmailsInputState = {
      email: 'test@test.ie',
      emailAddresses: [{ id: expect.any(String), email: 'test@test.ie' }],
    };

    expect(state).toEqual(check);
  });

  it('updates the state when deleting an email address', (): void => {
    const state: EmailsInputState = reducer(
      {
        ...defaultState,
        emailAddresses: [dummyEmailAddress],
      },
      {
        type: ActionTypes.DELETE_EMAIL_ADDRESS,
        payload: dummyEmailAddress,
      }
    );

    expect(state).toEqual(defaultState);
  });

  it('updates the state when resetting an email', (): void => {
    const state: EmailsInputState = reducer(
      {
        ...defaultState,
        email: 'test@test.ie',
      },
      {
        type: ActionTypes.RESET_EMAIL_ADDRESS,
      }
    );

    expect(state).toEqual(defaultState);
  });

  it('updates the state when updating an email', (): void => {
    const state: EmailsInputState = reducer(defaultState, {
      type: ActionTypes.UPDATE_EMAIL_ADDRESS,
      payload: 'test@test.be',
    });

    expect(state).toEqual({
      ...defaultState,
      email: 'test@test.be',
    });
  });

  it('returns the default state', (): void => {
    expect(reducer(undefined, { type: 'Unknown' })).toEqual(defaultState);
  });
});
