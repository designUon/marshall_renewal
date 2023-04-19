import React from 'react'
import '../css/login.css'

export default function Login() {
  return (
    <div className='login_wrap'>
        <form className="login_box">
            {/* <h4>LOGIN</h4> */}
                {/* <label htmlFor="">ID</label> */}
                <input type="text" placeholder='ID'/>
                <br/>
                {/* <label htmlFor="">PASSWORD</label> */}
                <input type="text" placeholder='PW'/>
                <br/>
                <div className="login_btn">LOGIN</div>
                <div className='join_btn'>MEMBER JOIN</div>
                <ul className='find_btn'>
                    <li>FIND ID</li>
                    <li>FIND PW</li>
                </ul>

                <div>
                    <div className="naver_login">NAVER LOGIN</div>
                    <div className="kakao_login">KAKAO LOGIN</div>
                </div>
        </form>
    </div>
  )
}
