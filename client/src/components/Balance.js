import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => (acc += item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => (acc += item.amount), 0);

  const total = (income - expense).toFixed(2);

  return (
    <div className="h-100 p-5 text-white bg-dark rounded-3">
      <h2>Total Transaction for the day</h2>
      <h1> Php {numberWithCommas(total)}</h1>
    </div>
  );
};

export default Balance;
