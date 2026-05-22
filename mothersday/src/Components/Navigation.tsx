import "./Navigation.css";


import { logo, login, shoppingbag, drop, menue, search } from "./Assets";
import { useState } from "react";

function Navigation() {
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <div className="nav">
      <img src={menue}
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
        <li >
          pages <img src={drop} alt="" className="icons1" onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
        </li >
        <ul className={isDropdownOpen ? "dropdown-open" : "dropdown-closed"}>
          <li onClick={() => window.alert("Experts")}>Experts</li>
          <li onClick={() => window.alert("Products")}>Products</li>
          <li onClick={() => window.alert("Valentines")}>Valentines</li>
        </ul>
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
   0
      </span>
    </div>
  );
}
export default Navigation;
