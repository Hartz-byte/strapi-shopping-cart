import { createStore } from "redux";
import reducers from "../reducers/Reducer";
import reducers2 from "../reducers/Reducer2";
import AddressReducer from "../reducers/AddressReducer";
import { combineReducers } from "redux";

const routeReducer = combineReducers({ reducers, reducers2, AddressReducer });

export const store = createStore(routeReducer);
