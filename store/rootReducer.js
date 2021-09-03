import { combineReducers } from "redux";

import { uiStateReducer } from "./uiState";

export const rootReducer = combineReducers({
  redux__ui: uiStateReducer,
});
