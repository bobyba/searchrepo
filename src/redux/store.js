import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import componentState from "./componentState";

let reducers = combineReducers({ componentState });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);
export default store;
