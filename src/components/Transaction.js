import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.transaction.amount < 0 ? "-" : "+";
  console.log(props.transaction.amount);

  return (
    <li className={props.transaction.amount < 0 ? "minus" : "plus"}>
      {props.transaction.text}{" "}
      <span>
        {sign}Php {Math.abs(props.transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(props.transaction.id)}
        className="delete-btn"
      ></button>
    </li>
  );
};

export default Transaction;
