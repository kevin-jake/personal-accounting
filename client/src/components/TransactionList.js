import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = ({ type, dateNow }) => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  const dateOnly = new Date(dateNow);
  const UTCDate = Date.UTC(
    dateOnly.getUTCFullYear(),
    dateOnly.getUTCMonth(),
    dateOnly.getUTCDate(),
    dateOnly.getUTCHours(),
    dateOnly.getUTCMinutes(),
    dateOnly.getUTCSeconds()
  );
  const dateUTC = new Date(UTCDate);
  const dateFilter = dateUTC.toISOString().substring(0, 10);
  console.log(dateFilter);

  useEffect(() => {
    getTransactions(dateFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFilter]);

  let rethtml = <></>;
  if (type === "expense") {
    const expenses = transactions.filter((item) => item.type === "expense");
    rethtml = (
      <>
        <ul id="list" className="list">
          {expenses.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
        </ul>
      </>
    );
  } else {
    const income = transactions.filter((item) => item.type === "income");
    rethtml = (
      <>
        <ul id="list" className="list">
          {income.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
        </ul>
      </>
    );
  }
  return rethtml;
};

export default TransactionList;
