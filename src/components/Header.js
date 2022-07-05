import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://user-images.githubusercontent.com/77065920/177334789-eb33b035-84e1-4464-98b7-4a7878285112.png"
          alt="Logo"
        />
      </Link>
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>
      {/* 3 links */}

      {/* basket icon with number */}
    </nav>
  );
};

export default Header;
