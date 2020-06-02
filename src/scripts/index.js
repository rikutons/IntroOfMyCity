import '../sass/style.sass';
import './jquery.easing.1.3';
import './contents';
import Title from './pages/title';
import Index from './pages/index';
import IntroContent from './pages/content-intro';
import TourismContent from './pages/content-tourism';
import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Title} />
                    <Route path="/index" component={Index} />
                    <Route path="/content-intro" component={IntroContent}/>
                    <Route path="/content-tourism" component={TourismContent}/>
                </Switch>
            </Router>
            // <Title/>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);