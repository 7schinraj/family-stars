import React from "react";
import "./Login.css";
import LoginPageImg from "../../Assets/FamilyImg.png";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Logo from "../../Assets/familyStarLogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  let navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const getFormData = (data) => {
    let names = data.target.name;
    let values = data.target.value;
    setFormData({ ...formData, [names]: values });
  };
  console.log(formData);

  async function LoginView(e) {
    try {
      e.preventDefault();
      let db_data = {
        username: formData.username,
        password: formData.password,
      };
      let result = await axios.post(
        "http://127.0.0.1:8000/user/login/",
        db_data
      );
      console.log(result);

      if (result.status === 200) {
        navigate("/dashboard");
      } else {
        alert("Error");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="login-page-container">
      <h1>Family Stars</h1>
      <div className="home-container">
        <img className="login-left-img" src={LoginPageImg} alt="" />
        <form className="login-form-container" action="">
          <h1 className="login">Login</h1>
          <div className="login-fields-container">
            <div className="fields-div">
              <input
                type="text"
                name="username"
                onChange={getFormData}
                placeholder="Username"
                required
                autoFocus
              />
              <BiSolidUserDetail className="icons" />
            </div>
            <div className="fields-div">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                onChange={getFormData}
                placeholder="Password"
                required
              />
              {passwordVisible ? (
                <IoEyeOffOutline className="icons" onClick={togglePasswordVisibility} />
              ) : (
                <IoEyeOutline className="icons" onClick={togglePasswordVisibility} />
              )}
            </div>


            <button onClick={LoginView} className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;


