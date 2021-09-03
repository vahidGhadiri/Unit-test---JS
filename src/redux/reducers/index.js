import {combineReducers} from "redux";
import successReducer from "./success.reducer";

export const rootReducer = combineReducers({
    successReducer: successReducer
})