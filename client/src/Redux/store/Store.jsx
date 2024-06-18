import { createStore } from "redux";
import reducers from "../reducers/Reducer";
import reducers2 from "../reducers/Reducer2";
import { combineReducers } from "redux";

const routeReducer = combineReducers({ reducers, reducers2 });

export const store = createStore(routeReducer);
