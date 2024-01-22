import { LOGO } from "../../utils/constants";
import { useState } from 'react'

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="Header">
      <div className="logo">
        <img className="logo-img" src={LOGO}></img>
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-out_btn"
            onClick={() => {
             loginBtn==='Login'? setLoginBtn('Logout'):setLoginBtn('Login')
             
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
