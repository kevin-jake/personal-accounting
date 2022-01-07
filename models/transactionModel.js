const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add positive or negative number"],
  },
  type: {
    type: String,
    required: [true, "Type of Transaction"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
