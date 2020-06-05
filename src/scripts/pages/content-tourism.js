import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll'

class TourismContent extends Component {
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
                        <img id="contents__header_image" src="../images/grandtoit.jpg" />
                        <div className="contents__title">芸術と自然に会いに行く。 </div>
                        <a className="contents__scroll" onClick={this.scrollToBottom} href="#content"><span></span>Scroll</a>
                    </div>
                </header>
                <div id="content" className="contents__content_wrapper">
                    <h1 className="contents__h1--red">島根県芸術文化センター グラントワ</h1>
                    <table>
                        <tbody>
                            <tr valign="top">
                                <td>
                                    <img src="../images/content/grandtoit-schedule.png" align="right" width="550" />
                                    <b>「美術館×劇場という芸術基地」</b> なるフレーズを掲げる施設です。<br />
						「美術館」の側面では、さまざまなテーマに沿った展覧会が同時に3, 4個開かれ、1つの入場券でそのすべてを見ることができます。<br />
						有名なもので、今年の1月28日まで「追悼水木しげる　ゲゲゲの人生展」など、非常に幅広い作品の展示が行われています。<br /><br />
						「劇場」の側面では、1か月に1,2回、著名なアーティストによるライブが行われます。<br />
						また、近隣の学校の文化祭や発表会の舞台としても用いられます。<br />
                                    <a href="http://www.grandtoit.jp/">公式サイト</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className="contents__h1--red">持石海岸</h1>
                    <table>
                        <tbody>
                            <tr valign="top">
                                <td>
                                    <img src="../images/content/motiishi.jpg" align="left" width="550" />
						国道191号線沿いにある、三里ヶ浜の一部の遊泳場<b>「持石遊泳場」</b>。<br /><br />
						道路を走っている時にも、思わず目を向けてしまいたくなるほどに水平線がきれいで、一直線の海岸が延々と続いています。 シャワー施設も整っているため、サーフィンやボディボードなどマリンスポーツを楽しむ人で賑わいます。<br /><br />
						また、石のモニュメントや東屋などもあるので海を眺めるだけでも楽しめる場所です。特に夕暮れ時は、延々と続く海岸線に沈む夕日が格別の時間を味あわせてくれます。
					</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TourismContent;