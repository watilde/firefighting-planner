import React, { createContext, useReducer, useContext } from "react";
import merge from "lodash.merge";
import combineReducers from "./combineReducers";
import { name, version } from "../../package.json";
import actions, { actionsState } from "./reducers/actions";

const rootReducer = combineReducers({
  actions
});
const initialState = {
  actions: actionsState
};
const persistedState = JSON.parse(localStorage.getItem(`${name}@${version}`));
const StoreContext = createContext(merge(initialState), persistedState);

export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
