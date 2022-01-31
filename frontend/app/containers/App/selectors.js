/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrInput = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currInput,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectSuccessCode = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.successCode,
  );

const makeSelectStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.strings,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectCurrInput,
  makeSelectLoading,
  makeSelectError,
  makeSelectSuccessCode,
  makeSelectStrings,
  makeSelectLocation,
};
