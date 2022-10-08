import '../sass/style.sass';
import Title from './pages/title';
import Menu from './pages/menu';
import IntroContent from './pages/content-intro';
import TourismContent from './pages/content-tourism';
import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component{
    render() {
        return (
            <Router  basename="/IntroOfMyCity/">
                <Switch>
                    <Route path="/" exact component={Title} />
                    <Route path="/index" component={Menu} />
                    <Route path="/content-intro" component={IntroContent}/>
                    <Route path="/content-tourism" component={TourismContent}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);