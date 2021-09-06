import React from "react"
import PropTypes from "prop-types"

class Button extends React.Component {

    submitEvent = () => {
        // if (this.props.emitEvent) {
        //     this.props.emitEvent()
        // }
        console.log("vahid")
    }

    render() {
        const {buttonText} = this.props
        return (
            <Button onClick={() => this.submitEvent()} data-test="button-component">
                {buttonText}
            </Button>
        )
    }
}

Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}

export default Button