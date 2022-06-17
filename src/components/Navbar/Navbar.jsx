import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavUser from "./NavUser";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <NavLogo />
      <NavMenu />
      <NavUser />
    </div>
  );
};

export default Navbar;
