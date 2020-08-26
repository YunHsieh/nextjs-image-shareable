import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';

import { fetchTestApi } from './modules/get_api';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  test: fetchTestApi,
});

export function initializeStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV !== 'development' ? applyMiddleware(thunkMiddleware) : composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export {
  rootReducer
}