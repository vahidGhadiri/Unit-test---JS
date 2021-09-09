import React from 'react'
import {shallow} from "enzyme"
import {findByTestAttribute, testStore} from "./utils/functions/helper";
import App from "./App";


const setup = (initialState = {}) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store}/>).childAt(0).dive()
    // console.log(wrapper.debug())
    return wrapper
}

describe("APP COMPONENT", () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: "test title 1",
                body: "test body "
            }, {
                title: "test title 2",
                body: "test body "
            }, {
                title: "test title 3",
                body: "test body "
            }]
        }
        wrapper = setup(initialState)
    })

    test("Should render without ERR", () => {
        const component = findByTestAttribute(wrapper, "app-component")
        expect(component.length).toEqual(1)
    })

    test("changeBtnVisibility should update state as expected", () => {
        const classInstance = wrapper.instance()
        classInstance.changeBtnVisibility()
        const newState = classInstance.state.isBtnHide
        expect(newState).toEqual(true)
    })

    test("sampleFunction_returnsValue should return value as expected ", () => {
        const classInstance = wrapper.instance()
        const newValue = classInstance.sampleFunction_returnsValue(2)
        expect(newValue).toEqual(3)
    })

})