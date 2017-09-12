import React from "react";
import {HashRouter as Router, Route} from 'react-router-dom';
import App from '../app/components/productBox';
import About from '../app/components/about';
import Repos from '../app/components/repos';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/repos" component={Repos}/>
                    <Route exact path="/about" component={About}/>
                </div>
            </Router>
        )
    }
}