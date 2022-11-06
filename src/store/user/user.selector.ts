import { createSelector } from "reselect";

import { UserState } from "./user.reducer";
import { RootState } from "../store";

export const selectUserReducer = (state: RootState): UserState => state.user;

// Gets the currentUser from redux store
export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
