import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../components/productBox';
import About from '../components/about';
import Repos from '../components/repos';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/repos" component={Repos}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}