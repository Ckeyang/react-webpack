import React from 'react';
import {Link} from 'react-router-dom';

require('../../assets/main.less');
export default class About extends React.Component {
    render() {
        return (
            <div className="productBox">
                About<br/>
                <Link to="/about">about</Link><br/>
                <Link to="/repos">repos</Link><br/>
                <Link to="/">index</Link>
            </div>
        );
    }
};
