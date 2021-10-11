

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPLOAD_CSV":
      return {
        ...state,
        orders: payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
