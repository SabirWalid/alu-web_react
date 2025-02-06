import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { login, loginRequest, loginSuccess, loginFailure } from './uiActionCreators';

const mockStore = configureMockStore();

describe('uiActionCreators', () => {
  it('loginRequest should dispatch LOGIN and LOGIN_SUCCESS actions on success', () => {
    fetchMock.getOnce('/login-success.json', { status: 200, body: {} });
    const store = mockStore();
    store.dispatch(loginRequest('email', 'password'));
    expect(store.getActions()).toEqual([
      { type: 'LOGIN', user: { email: 'email', password: 'password' } },
      { type: 'LOGIN_SUCCESS' },
    ]);
  });

  it('loginRequest should dispatch LOGIN and LOGIN_FAILURE actions on failure', () => {
    fetchMock.getOnce('/login-success.json', { status: 500, body: {} });
    const store = mockStore();
    store.dispatch(loginRequest('email', 'password'));
    expect(store.getActions()).toEqual([
      { type: 'LOGIN', user: { email: 'email', password: 'password' } },
      { type: 'LOGIN_FAILURE' },
    ]);
  });
});
