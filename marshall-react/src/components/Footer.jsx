import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <div className="footer_wrap">
            <div className="footer_left">
                <p>서울특별시 서초구 남부순환로 2271-5 (우 : 137-851)</p>
                <p><span>고객센터</span>02.2106.2982</p>
                <p>info@sovico.co.kr</p>
            </div>
            <div className="footer_right">
                <div className="pinterest"><Link to='https://www.pinterest.co.kr/marshallheadphones/' target="_blank" rel="noopener noreferrer" >SNS</Link></div>
                <div className="facebook"><Link to='https://www.facebook.com/marshallheadphones/' target="_blank" rel="noopener noreferrer">SNS</Link></div>
                <div className="instagram"><Link to='https://instagram.com/marshallrecords?igshid=YmMyMTA2M2Y=' target="_blank" rel="noopener noreferrer">SNS</Link></div>
            </div>
        </div>
    </div>
  )
}
