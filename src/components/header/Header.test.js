import React from "react"
import {shallow} from "enzyme"
import Header from "./Header.component"
import {findByTestAttribute} from "../../utils/functions/helper";


const setup = (props = {}) => {
    const component = shallow(<Header {...props}/>)
    return component
}

describe("Header Component", () => {

    let component;
    beforeEach(() => {
        component = setup()
    })
    test("Should render without error", () => {
        const wrapper = findByTestAttribute(component, "header-component")
        expect(wrapper.length).toEqual(1)
    })
    test("Should contain a logo", () => {
        const logo = findByTestAttribute(component, "logo-image")
        expect(logo.length).toEqual(1)
    })
})