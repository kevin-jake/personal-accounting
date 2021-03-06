const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api/v1/transactions", transactions);

app.get("/", (req, res) => {
  res.send("Hello!");
});

const PORT = process.env.PORT || 8080;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
