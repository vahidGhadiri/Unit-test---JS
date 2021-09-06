import checkPropTypes from "check-prop-types"
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../../redux/reducers";
import {middlewares} from "../../redux/store";

export const findByTestAttribute = (component, attribute) => {
    return component.find(`[data-test="${attribute}"]`)
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddlewares(rootReducer, initialState )
}