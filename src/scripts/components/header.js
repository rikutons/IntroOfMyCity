import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component{
    render() {
        return (
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
                <Link className="content_btn" to="/index">
                    トップへ
                </Link>
            </div>
        )
    }
}