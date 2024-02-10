import { LOGO } from "../../utils/constants";
import { useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="Header">
      <div className="logo">
        <img className="logo-img" src={LOGO}></img>
      </div>
      <div className="Nav-items">
        <ul>
          <li><Link to="/" className="items">Home</Link></li>
          <li><Link to="/about" className="items"> About us</Link></li>
          <li><Link to="/contact" className="items">Contact</Link></li>
          <li><Link to="/cart" className="items">Cart</Link></li>
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
