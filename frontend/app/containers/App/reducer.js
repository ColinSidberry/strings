/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  PUSH_STRING,
  PUSH_STRING_SUCCESS,
  PUSH_STRING_ERROR,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currInput: false,
  successCode: false,
  strings: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // PUSH_STRING Cases======================================================
      case PUSH_STRING:
        draft.loading = true;
        draft.error = false;
        draft.successCode = false;
        break;

      case PUSH_STRING_SUCCESS:
        draft.successCode = action.successCode;
        draft.loading = false;
        draft.currInput = action.input;
        break;

      case PUSH_STRING_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      // LOAD_STRINGS Cases=====================================================
      case LOAD_STRINGS:
        draft.loading = true;
        draft.error = false;
        draft.strings = false;
        break;

      case LOAD_STRINGS_SUCCESS:
        draft.strings = action.strings;
        draft.loading = false;
        break;

      case LOAD_STRINGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
