import { createStore, combineReducers, applyMiddleware } from "redux";
import addReducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(addReducer, applyMiddleware(thunk));

export default store;
