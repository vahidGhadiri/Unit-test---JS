import React from 'react'
import {shallow} from "enzyme"
import {findByTestAttribute, testStore} from "./utils/functions/helper";
import App from "./App";


const setup = (initialState = {}) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store}/>).childAt(0).dive()
    console.log(wrapper.debug())
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

})