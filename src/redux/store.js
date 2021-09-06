import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk"
import {rootReducer} from "./reducers";

export const middlewares = [ReduxThunk]
export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)
export const store = createStoreWithMiddleWare(rootReducer)