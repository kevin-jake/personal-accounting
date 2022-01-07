import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="h-100 p-5 text-white bg-dark rounded-3">
      <h2>Balance</h2>
      <h1> Php {numberWithCommas(total)}</h1>
    </div>
  );
};

export default Balance;
