import React, { createContext, useReducer, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import merge from "lodash.merge";
import combineReducers from "./combineReducers";
import { name, version } from "../../package.json";
import app, { appState } from "./reducers/app";
import map, { mapState } from "./reducers/map";
import planner, { plannerState } from "./reducers/planner";
import reporter, { reporterState } from "./reducers/reporter";

const rootReducer = combineReducers({
  app,
  map,
  planner,
  reporter
});

const initialState = {
  app: appState,
  map: mapState,
  planner: plannerState,
  reporter: reporterState
};

const persistedState = JSON.parse(localStorage.getItem(`${name}@${version}`));
const StoreContext = createContext(merge(initialState, persistedState));

export const useStore = () => {
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

StoreProvider.propTypes = {
  children: PropTypes.element.required
};
