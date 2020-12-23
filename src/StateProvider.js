import React, { createContext, useContext, useReducer } from "react";

// setup data layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Export data layer for use
export const useStateValue = () => useContext(StateContext);
