import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//Initial State
const initialState = {
  transactions: [],
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

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({ type: "DELETE", payload: id });
    } catch (err) {
      dispatch({ type: "transact_err", payload: err.response.data.error });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({ type: "transact_err", payload: err.response.data.error });
    }
  }

  const value = {
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    deleteTransaction,
    addTransaction,
    getTransactions,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};
