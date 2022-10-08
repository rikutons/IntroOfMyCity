import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false, phase1: false };

        // This binding is necessary to make `this` work in the callback
        this.activate = this.activate.bind(this);
    }

    activate() {
        this.setState({isActive : true})
        this.timeout = setTimeout(() => {
           this.setState({phase1: true}) 
        }, 5000);

        this.timeout2 = setTimeout(() => {
            this.props.history.push("/index")
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
        clearInterval(this.timeout2);
    }

    render() {
        return(
            <div className="title" data-isactive={this.state.isActive}>
                <div className="title__background"/>
                <div className="title__background_img"/>
                <div className="title__sub">
                    <span className="art_color_dark">
                        Art
                    </span>
                    &nbsp;and&nbsp;
                    <span className="nature_color_dark">
                            Nature
                    </span>
                </div>
                <a className="title__btn" onClick={this.activate}/>
                <div className="title__github_icon_back"/>
                <a href="https://github.com/rikutons/IntroOfMyCity">
                    <img className="title__github_icon" src="./images/GitHub-Mark-Small.svg"/>
                </a>
                <div className="title__title">
                    MASUDA
                </div>
                <div className="title__progless_bar" />
                <div className="title__backcircle"/>
                <Link to="index" className="title__skip_btn">
                    SKIP
                </Link>

                {this.state.phase1 &&
                    <div>
                        <div className="phase1__cutin"> </div>
                        <div className="phase1__cutin_text" >きらめく自然、こころ癒されるまち。</div>
                        <div className="phase1__backcircle" />
                        <img className="phase1__map" src="./images/chugoku-tiho.png" alt="a" />
                        <div className="phase1__text2">益田市</div>
                        <div>
                            <div className="phase1__change1" />
                            <div className="phase1__change2" />
                            <div className="phase1__change3" />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Title;