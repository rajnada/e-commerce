import { combineReducers } from "redux";
import orderReducer from "./orderReducer";


const rootReudcer = combineReducers({
  auth: orderReducer,

});

const reducers = (state, action) => {
  if (action.type === "RESET_STORE") {
    state = undefined;
  }

  return rootReudcer(state, action);
};

export default reducers;
