import React, { createContext, useContext, useReducer } from "react";

// Here we are preparing the data layer...... //
export const StateContext = createContext();

// HOC we use this to wrap our app //
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// To pull the data from data layer we use Below UsestateValue hook  //

export const useStateValue = () => useContext(StateContext);