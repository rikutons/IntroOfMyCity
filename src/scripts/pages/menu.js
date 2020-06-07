import React, { Component } from 'react'
import Header from '../components/header'

class Menu extends Component {
    render() {
        return(
		<div className="index__box">
			<div className="index__background"></div>
			<Header returnToTitle="true"/>
			<div className="index__titlebox">
				<div className="index__title">益田市</div>
				<div className="index__sub"><span className="art_color">Art</span> and<br/><span className="nature_color">Nature</span></div>
			</div>
		</div>
        )
    }
}

export default Menu