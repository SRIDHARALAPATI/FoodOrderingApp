import { LOGO } from "../../utils/constants";
const Header = () => {
    return (
      <div className="Header">
        <div className="logo">
          <img
            className="logo-img"
            src={LOGO}
          ></img>
        </div>
        <div className="Nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;