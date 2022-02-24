import { createStore, combineReducers } from "redux";
import { reducer } from "./reducers";

export default createStore(reducer, undefined);
