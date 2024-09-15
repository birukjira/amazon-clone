import React from "react";
import logo fro";
import { BsSearch } from "../../assets/icons/nav-search.png";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* logo */}
          <a href="/">
            <img src={logo} alt="amazon logo" />
          </a>
          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={classes.search}>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          {/* icon */}
          <BsSearch size={37} />
        </div>

        <div className={classes.order__container}>
          {/* right side link */}
          <a href="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg"
              alt="USA Flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          {/* three components */}
          <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>

          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>

          {/* cart */}
          <a href="" className={classes.cart}>
            <BiCart />
            <span>0</span>
          </a>
        </div>
      </section>
    </header>
  );
}

export default Header;
