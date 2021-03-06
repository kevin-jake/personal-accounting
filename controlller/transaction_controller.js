const Transaction = require("../models/transactionModel");

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access PUBLIC
exports.getTransactions = async (req, res, next) => {
  let dateNow = req.params.date;
  let dateNowNext = Date.parse(dateNow);
  dateNowNext = new Date(dateNowNext);
  dateNowNext.setDate(dateNowNext.getDate() + 1);
  dateNowNext = dateNowNext.toISOString().substring(0, 10);
  dateNow = new Date(dateNow);
  dateNowNext = new Date(dateNowNext);
  try {
    const transactions = await Transaction.find({
      createdAt: {
        $gt: dateNow,
        $lt: dateNowNext,
      },
    });
    return res
      .status(200)
      .json({ success: true, count: transactions.length, data: transactions });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, error: `ServerError: ${err.message}` });
  }
  res.send("GET transactions");
};

// @desc  Add transactions
// @route POST /api/v1/transactions
// @access PUBLIC
exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({ success: true, data: transaction });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({ success: false, error: messages });
    } else {
      return res
        .status(500)
        .json({ success: false, error: `ServerError: ${err.message}` });
    }
  }
};

// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @access PUBLIC
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, error: "No Transaction found" });
    }

    await transaction.remove();
    return res.status(200).json({ success: true, data: {} });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, error: `ServerError: ${err.message}` });
  }
};
