import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = (props) => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let rethtml = <></>;
  if (props.type === "expense") {
    const expenses = transactions.filter((item) => item.type === "expense");
    console.log(expenses);
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
