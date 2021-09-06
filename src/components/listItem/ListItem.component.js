import React from "react"
import PropTypes from "prop-types"

class ListItem extends React.Component {
    render() {
        const {title, desc} = this.props

        if (!title) return null

        return (
            <div data-test="listItem-component">
                <h3 data-test="listItem-title">{title}</h3>
                <h6 data-test="listItem-desc">{desc}</h6>
            </div>
        )
    }
}

ListItem.prototypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem