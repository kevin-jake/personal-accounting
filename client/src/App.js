import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import "./App.css";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

const App = (props) => {
  return (
    <GlobalProvider>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Balance />
        </Row>
        <Row className="align-items-md-stretch">
          <IncomeExpenses />
        </Row>
        <Row>
          <AddTransaction />
        </Row>
      </Container>
    </GlobalProvider>
  );
};

export default App;
