import React from "react";
import logo from "../img/FH.png";
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="NavBar">
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">SERVICES</a>
            </li>
            <img src={logo} alt="" />
            <li>
              <a href="/">CONTACT</a>
            </li>
            <li>
              <a href="/">TEAM</a>
            </li>
            <li>
              <a href="/">PORTFOLIOS</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
