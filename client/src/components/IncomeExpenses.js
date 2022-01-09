import React, { useContext } from "react";
import { Col } from "react-bootstrap";

import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

import TransactionList from "./TransactionList";

const IncomeExpenses = ({ dateNow }) => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => (acc += item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => (acc += item.amount), 0);

  return (
    <>
      <Col xs={12} md={6}>
        <div className="bg-light mt-3 mb-2 border rounded-3 text-center p-5">
          <h4>Total Income</h4>
          <p className="money plus">
            Php {numberWithCommas(income.toFixed(2))}
          </p>
          <h5>Transactions</h5>
          <TransactionList type="income" dateNow={dateNow} />
        </div>
      </Col>
      <Col xs={12} md={6}>
        <div className="bg-light mt-3 mb-2 border rounded-3 text-center p-5">
          <h4>Total Expense</h4>
          <p className="money minus">
            Php {numberWithCommas(expense.toFixed(2))}
          </p>
          <h5>Transactions</h5>
          <TransactionList type="expense" dateNow={dateNow} />
        </div>
      </Col>
    </>
  );
};

export default IncomeExpenses;
