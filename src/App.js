import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import "./App.css";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

const App = (props) => {
  return (
    <div>
      <Container>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Container>
    </div>
  );
};

export default App;
