/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PUSH_STRING } from 'containers/App/constants';
import { stringPushed, stringPushingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectInput } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* pushString() {
  // Select string from store
  const input = yield select(makeSelectInput());
  const apiURL = `http://localhost:3002/string/`;
  try {
    // Call our request helper (see 'utils/request')
    const successCode = yield call(request, apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });
    yield put(stringPushed(successCode, input));
  } catch (err) {
    yield put(stringPushingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* serverResp() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(PUSH_STRING, pushString);
}
