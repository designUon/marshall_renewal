import React from 'react'
// import '../App.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header>
                <div className="header_wrap">
                    <Link to='/'><div className="header_logo"></div></Link>
                    <ul className="main_menu">
                        <Link to='/product'><li>PRODUCT
                                <ul className='sub_menu'>
                                    <Link to='/product/speaker'><li>스피커</li></Link>
                                    <Link to='/product/headphone'><li>헤드폰</li></Link>
                                    <Link to='/product/earphone'><li>이어폰</li></Link>
                                    <Link to='/product/accessory'><li>악세사리</li></Link>
                                </ul>
                            </li></Link>
                        <Link to='/about'><li>ABOUT
                                <ul className='sub_menu'>
                                    <Link to='/about/story'><li>스토리</li></Link>
                                    <Link to='/about/store'><li>매장찾기</li></Link>
                                </ul>
                            </li></Link>
                    </ul>
                </div>
                <div className="header_login">
                    <Link to='/login'>LOGIN</Link>
                    <Link to='/cart'>CART</Link>
                    <Link to='/mypage'>MYPAGE</Link>
                </div>
            </header>
        </div>
    )
}
