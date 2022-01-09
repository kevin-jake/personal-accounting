import React, { forwardRef } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = ({ dateNowHandler, dateNow }) => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button onClick={onClick} ref={ref} className="date-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-calendar"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
      </svg>
    </Button>
  ));

  return (
    <div className="p-5 mb-4 bg-warning rounded-3 text-center">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold"> Personal Accounting</h1>
        <h2>
          {dateNow.toLocaleDateString("en-US", options)}{" "}
          <span>
            <DatePicker
              selected={dateNow}
              onChange={(date) => dateNowHandler(date)}
              customInput={<ExampleCustomInput />}
            />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
