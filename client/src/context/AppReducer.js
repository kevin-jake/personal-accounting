export default (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "GET_transact":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "transact_err":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
