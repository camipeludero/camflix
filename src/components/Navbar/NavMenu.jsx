import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const links = [
    { title: "Inicio", path: "/" },
    { title: "Series", path: "/series" },
    { title: "Peliculas", path: "/peliculas" },
    { title: "Novedades Populares", path: "/popular" },
    { title: "Mi Lista", path: "/list" },
  ];
  return (
    <div className="nav_menu">
      {links.map((link) => (
        <NavLink
          to={link.path}
          className={({ isActive }) => "nav_item" + (isActive ? " active" : "")}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavMenu;
