import React, { createContext, useReducer, useContext, useEffect } from "react";
import merge from "lodash.merge";
import combineReducers from "./combineReducers";
import { name, version } from "../../package.json";
import app, { appState } from "./reducers/app";
import planner, { plannerState } from "./reducers/planner";

const rootReducer = combineReducers({
  app,
  planner
});
const initialState = {
  app: appState,
  planner: plannerState
};
const persistedState = JSON.parse(localStorage.getItem(`${name}@${version}`));
const StoreContext = createContext(merge(initialState, persistedState));

export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  useEffect(() => {
    localStorage.setItem(`${name}@${version}`, JSON.stringify(state));
  }, [state]);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
