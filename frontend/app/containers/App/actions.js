/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  PUSH_STRING,
  PUSH_STRING_SUCCESS,
  PUSH_STRING_ERROR,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

// Pushing String Actions=======================================================
/**
 * Push the input string, this action starts the request saga
 *
 * @return {object} An action object with a type of PUSH_STRING
 */
export function pushString() {
  return {
    type: PUSH_STRING,
  };
}

/**
 * Dispatched when the string is loaded by the request saga
 *
 * @param  {array} successCode The server response
 * @param  {string} input The current input
 *
 * @return {object}      An action object with a type of PUSH_STRING_SUCCESS passing the input
 */
export function stringPushed(successCode, input) {
  return {
    type: PUSH_STRING_SUCCESS,
    successCode,
    input,
  };
}

/**
 * Dispatched when pushing the string fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of PUSH_STRING_ERROR passing the error
 */
export function stringPushingError(error) {
  return {
    type: PUSH_STRING_ERROR,
    error,
  };
}

// Loading Strings Actions======================================================
/**
 * Load the string, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_STRINGS
 */
export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} strings The list of strings stored on the server
 *
 * @return {object}      An action object with a type of LOAD_STRINGS_SUCCESS passing the strings
 */
export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_STRINGS_ERROR passing the error
 */
export function stringsLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}
