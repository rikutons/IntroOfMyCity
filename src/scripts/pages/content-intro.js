import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll'

class IntroContent extends Component {
    constructor(props) {
        super(props)
        this.scrollToBottom = this.scrollToBottom.bind()
    }
    scrollToBottom() {
        scroll.scrollToBottom()
    }
    render() {
        return (
            <div>
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
                <header>
                    <div className="contents__header_wrapper">
                        <img id="contents__header_image" src="../images/town.jpg" />
                        <div className="contents__title">ようこそ、益田市へ。 </div>
                        <a className="contents__scroll" onClick={this.scrollToBottom} href="#content"><span></span>Scroll</a>
                    </div>
                </header>
                <div id="content" className="contents__content_wrapper">
                    <h1 className="contents__h1--blue">益田市って？</h1>
                    <table>
                        <tbody>
                        <tr valign="top">
                            <td>
                                <img src="../images/content/location.png" align="right" />
                                <p>益田市は、島根県西部の日本海に面した位置にある市(右の写真の赤い箇所)です。人口は<b>45,000人</b>ほどで、島根県内最大の市面積を持ちます。</p>
                                <p>島根県芸術文化センター グラントワや益田市立雪舟の郷記念館などの芸術的側面と、<br/>清流日本一になった高津川や持石海岸などの大自然的側面があり、それらの調和がとれた情趣に富んだ街です。</p>
                                <p>あと、あの有名なスーパーキヌヤの本店があります。二階建てです。すごい。</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className="contents__h1--blue">主要産業</h1>
                    <table>
                        <tbody>
                        <tr valign="top">
                            <td>
                                <b>・天然アユ</b><br/>
                                                &emsp;益田市の中心を通る高津川では、6月から9月の間、漁業許可証を持つ者に限りアユ釣りが許可されます。<br/>
                                                    高津川で釣れた天然のアユは、1kg10,000円を超える高値で売買されるそうです。<br/><br/>
                                <img src="../images/content/amusmeron.jpg" width="350" align="right" />
                                <b>・アムスメロン</b><br/>
                                &emsp;西いわみ地区本部を代表する特産物のアムスメロンは、昭和51年に益田市飯田町で本格的な栽培が始まりました。<br/>
                                栽培方法は全て立体栽培で、仕立ては2本仕立て1つる1果どりとしており、専用の配合肥料を使って育てます。<br/>
                                アムスメロンと並び、贈答用として人気が高いアールスメロンも栽培されています。
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default IntroContent;