import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {


    render() {
        const {buttonText, emitEvent} = this.props;
        return (
            <button onClick={() => emitEvent()} data-test="button-component">
                {buttonText}
            </button>
        );
    }
}

Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default Button;