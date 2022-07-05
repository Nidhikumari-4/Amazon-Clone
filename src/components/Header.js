import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      {/* amazon logo */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://user-images.githubusercontent.com/77065920/177334789-eb33b035-84e1-4464-98b7-4a7878285112.png"
          alt="Logo"
        />
      </Link>

      {/* Navabar search */}
      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_search_icon" />
      </div>

      {/* navbar links */}
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_option_one">Hello Strangers</span>
            <span className="header_option_two">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option_one">Returns</span>
            <span className="header_option_two">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option_one">Your</span>
            <span className="header_option_two">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_option_basket">
            <ShoppingBasketIcon />
            <span className="header_basket_count header_option_two">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
