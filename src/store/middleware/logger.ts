import { Middleware } from "redux";
import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
    console.log(action.type);
    console.log(action.payload);
    console.log(store.getState());

    next(action);
    console.log("next state", store.getState());
  };
