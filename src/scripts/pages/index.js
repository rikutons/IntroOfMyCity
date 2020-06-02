import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {
    render() {
        return(
		<div className="index__box">
			<div className="index__background"></div>
			<div className="content_btn_wrapper">
				<Link className="content_btn" to="/content-intro">
					はじめての益田
				</Link>
				<Link className="content_btn" to="/content-tourism">
					観光
				</Link>
				<a className="content_btn" href="https://www.city.masuda.lg.jp/">
					益田市HP(外部ページ)
				</a>
				<Link className="content_btn" to="/">
					トップへ
				</Link>
			</div>
			<div className="index__titlebox">
				<div className="index__title">益田市</div>
				<div className="index__sub"><span className="art_color">Art</span> and<br/><span className="nature_color">Nature</span></div>
			</div>
		</div>
        )
    }
}

export default Index;