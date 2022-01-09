import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      type,
    };

    addTransaction(newTransaction);
  };

  return (
    <div className="bg-light mt-3 mb-2 border rounded-3 p-5">
      <h3>Add new transaction</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="text">Text</Form.Label>
          <Form.Control
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="amount">Amount </Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter number..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="type">Transaction Type</Form.Label>
          <Form.Select
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter type"
          >
            <option value="expense" active>
              Money Out
            </option>
            <option value="income">Money In</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Add transaction</Button>
      </Form>
    </div>
  );
};

export default AddTransaction;
