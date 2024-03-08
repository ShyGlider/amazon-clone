import React from "react";
import "./Header.css";
import logo from "./image/amazon_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart } from "@mui/icons-material";
function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={logo} />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLine1">Hello</span>
          <span className="header_optionLine2">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLine1">Returns</span>
          <span className="header_optionLine2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLine1">Your</span>
          <span className="header_optionLine2">Prime</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingCart />
          <span className="header_optionLine2 header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
