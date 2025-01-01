import React from "react";

const NavbarContents = () => {
  return (
    <nav>
      <ul id="navUi">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/profilePage">You</a>
        </li>
        <li>
          <a href="/more">More</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
        {/* <li><a href="/menu">Menu</a></li> */}
      </ul>
    </nav>
  );
};
export default NavbarContents;
