import React from 'react'
import { CiLogout } from "react-icons/ci";
import dashboard from "../../Assets/bannerImg.png"
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { PiMoneyWavyDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Dashboard.css"
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='navbar'>
        <h1>Logo</h1>
        <div className='navlist'>
          <Link className='link' to='/income'>
            <p>
              <span>Income</span>
              <RiMoneyRupeeCircleLine />
            </p>
          </Link>
          <p>
            <span>Expenses</span>
            <PiMoneyWavyDuotone />
          </p>
          <p>
            <span>Documents</span>
            <IoDocumentTextOutline />
          </p>
          <p>
            <span>Profile</span>
            <CgProfile />
          </p>
        </div>
        <button className='logout-btn'>Log out <CiLogout /></button>
      </div>
      <h1 className='welcome-note'>Welcome, User!</h1>
      <div className='dashboard-img'>
        <img src={dashboard} alt="" />
      </div>
    </div>
  )
}

export default Dashboard