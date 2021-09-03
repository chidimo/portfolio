import { createSelector } from "reselect";
import { TOGGLE_SIDEBAR } from "./actionTypes";

const initState = {
  sidebar_is_open: true,
};

export const uiStateReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebar_is_open: action.sidebar_is_open };
    default:
      return state;
  }
};

const getSidebar = (state) => state.redux__ui.sidebar_is_open;

export const getSidebarState = createSelector(
  getSidebar,
  (sidebar_is_open) => sidebar_is_open
);
