/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

// Get's the main state and then extracts the substate
const makeSelectInput = () =>
  createSelector(
    selectHome,
    homeState => homeState.input,
  );
export { selectHome, makeSelectInput };
