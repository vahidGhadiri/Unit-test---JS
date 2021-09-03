import React from "react"
import {shallow} from "enzyme"
import Headline from "./Headline.component"
import {findByTestAttribute} from "../../utils/functions/helper";


const setup = (props = {}) => {
    const component = shallow(<Headline {...props}/>)
    return component
}

describe("headline Component", () => {

    describe("Have Props", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: "Test header",
                description: "Test description"
            }
            wrapper = setup(props)
        })

        test("it should render without errors", () => {
            const component = findByTestAttribute(wrapper, "headline-component")
            expect(component.length).toEqual(1)
        })

        test("it should render a H1", () => {
            const h1 = findByTestAttribute(wrapper, "header")
            expect(h1.length).toEqual(1)
        })

        test("it should render a description", () => {
            const description = findByTestAttribute(wrapper, "description")
            expect(description.length).toEqual(1)
        })
    })

    describe("Have NO Props", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup()
        })
        test("it should NOT render", () => {
            const component = findByTestAttribute(wrapper, "headline-component")
            expect(component.length).toEqual(0 )
        })
    })
})