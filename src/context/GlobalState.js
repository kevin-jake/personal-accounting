import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
// console.log(initialState);
// Create context
export const GlobalContext = createContext(initialState);
// Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  function deleteTransaction(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD", payload: transaction });
  }

  const value = {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
  };

  console.log(value);

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};
