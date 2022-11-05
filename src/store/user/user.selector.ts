import { createSelector } from "reselect";

import { UserState } from "./user.reducer";

export const selectUserReducer = (state): UserState => state.user;

// Gets the currentUser from redux store
export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
