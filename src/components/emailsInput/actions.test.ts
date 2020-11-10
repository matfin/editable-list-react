import { EmailAddress } from 'models';
import ActionTypes from './actionTypes';
import actions from './actions';

describe('actions tests', (): void => {
  const spyDispatch = jest.fn();
  const testActions = actions(spyDispatch);

  beforeEach((): void => {
    spyDispatch.mockClear();
  });

  it('should create an email address', (): void => {
    // given
    testActions.createEmailAddress();

    // then
    expect(spyDispatch).toHaveBeenCalledWith({
      type: ActionTypes.CREATE_EMAIL_ADDRESS,
    });
  });

  it('should delete an email address', (): void => {
    // given
    const emailAddress: EmailAddress = {
      id: '123',
      email: 'test@test.nl',
    };

    // then
    testActions.deleteEmailAddress(emailAddress);

    expect(spyDispatch).toHaveBeenCalledWith({
      type: ActionTypes.DELETE_EMAIL_ADDRESS,
      payload: emailAddress,
    });
  });

  it('should reset the email address', (): void => {
    // givem
    testActions.resetEmailAddress();

    // then
    expect(spyDispatch).toBeCalledWith({
      type: ActionTypes.RESET_EMAIL_ADDRESS,
    });
  });

  it('should update the email address', (): void => {
    // given
    testActions.updateEmailAdress('test@test.nl');

    // then
    expect(spyDispatch).toHaveBeenCalledWith({
      type: ActionTypes.UPDATE_EMAIL_ADDRESS,
      payload: 'test@test.nl',
    });
  });
});
