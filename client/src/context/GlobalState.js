import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import res from "express/lib/response";

//Initial State
const initialState = {
  transactions: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
  error: null,
  loading: true,
};
// console.log(initialState);
// Create context
export const GlobalContext = createContext(initialState);
// Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action

  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      res.data.data;

      dispatch({ type: "GET_transact", payload: res.data.data });
    } catch (err) {
      dispatch({ type: "transact_err", payload: err.response.data.error });
    }
  }

  function deleteTransaction(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD", payload: transaction });
  }

  const value = {
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    deleteTransaction,
    addTransaction,
    getTransactions,
  };

  console.log(value);

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};
