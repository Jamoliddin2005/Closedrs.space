import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ ClickHandlerImgUploading }) => {
  return (
    <div className="navbar_container">
      <nav>
        <div className="left">
          <Link to="/">Closedrs.space</Link>
        </div>
        <div className="right">
          <div className="language">
            <span className="span en">EN</span>
            <span className="span">RU</span>
          </div>
          <li>
            <Link to="/upload" onClick={ClickHandlerImgUploading}>
              Загрузить
            </Link>
          </li>
          <li>
            <Link to="/login">Войти</Link>
          </li>
          <li className="register">
            <Link to="/register">Зарегистрироваться</Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
