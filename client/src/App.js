import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import "./App.css";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  const [dateNow, setDateNow] = useState(new Date(Date.now()));
  return (
    <GlobalProvider>
      <Container>
        <Row>
          <Header
            dateNow={dateNow}
            dateNowHandler={(date) => {
              setDateNow(date);
            }}
          />
        </Row>
        <Row>
          <Balance />
        </Row>
        <Row className="align-items-md-stretch">
          <IncomeExpenses dateNow={dateNow} />
        </Row>
        <Row>
          <AddTransaction />
        </Row>
      </Container>
    </GlobalProvider>
  );
};

export default App;
