import React from "react"
import {shallow} from "enzyme"
import {checkProps, findByTestAttribute} from "../../utils/functions/helper";
import ListItem from "./ListItem.component"

describe("LISTITEM COMPONENT", () => {

    describe("Checking Proptypes", () => {
        test("Should NOT throw a warning", () => {
            const expectedProps = {
                title: "test title",
                desc: "test desc"
            }
            const propsErr = checkProps(ListItem, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe("Component Renders", () => {
        let wrapper;
        beforeEach(() => {
            let props = {
                title: "test title",
                desc: "test desc"
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        test("Should render without error", () => {
            const component = findByTestAttribute(wrapper, "listItem-component")
            expect(component.length).toEqual(1)
        })

        test("Render a title", () => {
            const title = findByTestAttribute(wrapper, "listItem-title")
            expect(title.length).toEqual(1)
        })

        test("Render a desc", () => {
            const desc = findByTestAttribute(wrapper, "listItem-desc")
            expect(desc.length).toEqual(1)
        })
    })
})