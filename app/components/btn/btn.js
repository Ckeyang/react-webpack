import React from 'react';
import PropTypes from 'prop-types'

export default class Btn extends React.Component {
    render() {
        const {className, btnName, onClickListener} = this.props;
        return (
            <span className={className} onClick={onClickListener}>{btnName}</span>
        );
    }
};
Btn.propTypes = {
    className: PropTypes.string.isRequired,
    btnName: PropTypes.string.isRequired,
    onClickListener: PropTypes.func
};
