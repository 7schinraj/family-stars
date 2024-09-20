import React from 'react'
import './Login.css'
import LoginPageImg from "../../Assets/FamilyImg.png"
import { BiSolidUserDetail } from "react-icons/bi";
import { IoEye,IoEyeOffOutline } from "react-icons/io5";
import Logo from "../../Assets/FamilystarsLogo.png"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='login-page-container'>
        {/* <img className='logo' src={Logo} alt="" /> */}
        <h1 className='logo'>Logo</h1>
        <div className='home-container'>
            <img className='login-left-img' src={LoginPageImg} alt="" />
            <form className='login-form-container' action="">
                <h1 className='login'>Login</h1>
                <div className='login-fields-container'>
                    <div className='fields-div'>
                        <input type="text" placeholder='Username'required autoFocus/>
                        <BiSolidUserDetail className='icons'/>
                    </div>
                    <div className='fields-div'>
                        <input type="password" placeholder='Password'required autoFocus/>
                        <IoEye className='icons'/>
                        <IoEyeOffOutline className='icons'/>
                    </div>
                    <Link to="/income">
                        {/* {" "} */}
                        <button className='login-btn'>Login</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>

  )
}
export default Login 