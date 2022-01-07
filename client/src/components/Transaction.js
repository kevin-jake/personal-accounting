import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={props.transaction.type === "expense" ? "minus" : "plus"}>
      {props.transaction.text}
      <span>Php {numberWithCommas(Math.abs(props.transaction.amount))}</span>
      <button
        onClick={() => deleteTransaction(props.transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
