import "./Navigation.css";

import { logo, login, shoppingbag, drop, menue, search } from "./Assets";
import { useState } from "react";

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <img
        src={menue}
        alt=""
        className="menue"
        onClick={() => setOpen(!open)}
      />
      <ul className={open ? "nav-menu active" : "nav-menu"}>
        <li>
          <img src={logo} alt="Logo" className="logo" />
        </li>
        <li>Home</li>
        <li>
          Shop <img src={drop} alt="" className="icons1" />
        </li>
        <li>
          Blog <img src={drop} alt="" className="icons1" />
        </li>
        <li>
          pages <img src={drop} alt="" className="icons1" />
        </li>
        <li>Contact</li>
      </ul>
      <input
        type="text"
        name="search"
        id="searchbar"
        placeholder="Search our store"
      />
      <img src={search} alt="" className="icons" />
      <img src={login} alt="" className="icons" />
      <img src={shoppingbag} alt="" className="icons" />
      <span className="cart-badge" id="cart-count">
        3
      </span>
    </div>
  );
}
export default Navigation;
