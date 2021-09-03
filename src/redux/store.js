import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk"
import {rootReducer} from "./reducers";

const middleware = [ReduxThunk]

export const storeWithMiddleware = applyMiddleware(...middleware)(createStore)

export const store = storeWithMiddleware(rootReducer)