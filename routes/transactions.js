const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controlller/transaction_controller");

router.route("/:date").get(getTransactions);
router.route("/:id").delete(deleteTransactions);
router.route("/").post(addTransactions);

module.exports = router;
