import React from "react"
import {shallow} from "enzyme"

import Headline from "./Headline.component"
import {findByTestAttribute, checkProps} from "../../utils/functions/helper";


const setup = (props = {}) => {
    const component = shallow(<Headline {...props}/>)
    return component
}

describe("headline Component", () => {

    describe("Checking propTypes", () => {
        test("Should NOT Throw a Warning", () => {
            const expectedProps = {
                header: "Test Header",
                description: "Test Description",
                tempArr: [{
                    firstName: "Test First Name",
                    lastName: "Test Last Name",
                    job: "Test Job",
                    age: 100,
                    email: "Test@test.com",
                    isMarried: "false"
                }]
            }
            const propsErr = checkProps(Headline, expectedProps)
            console.log(propsErr)
            expect(propsErr).toBeUndefined()
        })
    })

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
            expect(component.length).toEqual(0)
        })
    })
})