import React from "react"
import {shallow} from "enzyme"

import {checkProps, findByTestAttribute} from "../../utils/functions/helper";
import Button from "./button.component";


describe("BUTTON COMPONENT", () => {

    describe("Checking proptypes", () => {
        test("Should NOT throw a warning", () => {
            const expectedProps = {
                ButtonText: "Test Button Text",
                emitEvent: () => {
                }
            }
            const propsErr = checkProps(expectedProps, Button);
            expect(propsErr).toBeUndefined()
        })
    })

    describe("Renders", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                ButtonText: "Test Button Text",
                emitEvent: () => {
                }
            }
            wrapper = shallow(<Button {...props}/>)
        })

        test("Should render a button", () => {
            const button = findByTestAttribute(wrapper, "button-component")
            expect(button.length).toEqual(1)
        })
    })

})