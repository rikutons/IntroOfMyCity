import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Header(props){
    let returnLink;
    if (props.returnToTitle) {
        returnLink = (
            <Link className="header__btn" to="/">
                タイトルへ
            </Link>
        )
    }
    else {
        returnLink = (
            <Link className="header__btn" to="/index">
                メニューへ
            </Link>
        )
    }
    return (
        <div className="header__wrapper">
            <Link className="header__btn" to="/content-intro">
                はじめての益田
            </Link>
            <Link className="header__btn" to="/content-tourism">
                観光
            </Link>
            <a className="header__btn" href="https://www.city.masuda.lg.jp/">
                益田市HP(外部ページ)
            </a>
            {returnLink}
        </div>
    )
}

export default Header