import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
            <div className="title" data-isactive={this.state.isActive} data-phase1={this.state.phase1}>
                <div className="title__background"/>
                <div className="title__sub">
                    <span className="art_color">
                        Art
                    </span>
                    and
                    <span className="nature_color">
                            Nature
                    </span>
                </div>
                <div className="title__alert">
                    ChromeかFirefoxでないと正常に動作しませんm(_ _)m
                </div>
                <div className="title__title">
                    MASUDA
                </div>
                <a className="title__btn" onClick={this.activate}/>
                <div className="title__backcircle"/>
                <Link to="Index" className="title__skip_btn">
                    SKIP
                </Link>

                <div className="phase1__text1"/>
                <div className="phase1__backcircle"/>
                <img className="phase1__map" src="../images/chugoku-tiho.png" alt="a" />
                <div className="phase1__text2">益田市</div>
                <div>
                    <div className="phase1__change1"/>
                    <div className="phase1__change2"/>
                    <div className="phase1__change3"/>
                </div>
            </div>
        )
    }
}

export default Title;