import React from 'react'
import {Link} from 'react-router-dom'
import MainSlide from '../components/MainSlide'

import '../css/home.css'

export default function Home() {
    return (
        <div>
            {/* <VimeoPlayer/> */}
            {/* <div className="main_video"></div> */}
            <MainSlide/>

            <ul className='product_warp'>
                <Link to='/product/speaker'><li><div>SPEAKER</div></li></Link>
                <Link to='/product/headphone'><li><div>HEADPHONE</div></li></Link>
                <Link to='/product/earphone'><li><div>EARPHONE</div></li></Link>
                <Link to='/product/accessory'><li><div>ACCESSORY</div></li></Link>
            </ul>

        </div>
    )
}
