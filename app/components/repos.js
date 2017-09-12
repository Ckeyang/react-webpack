import React from 'react';
import {Link} from 'react-router-dom';

require('../../assets/main.less');
export default  class Repos extends React.Component {
    render() {
        return (
            <div className="productBox">
                repos<br/>
                <Link to="/about">about</Link><br/>
                <Link to="/repos">repos</Link><br/>
                <Link to="/">index</Link>
            </div>
        );
    }
};
