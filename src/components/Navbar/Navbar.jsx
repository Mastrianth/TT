import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/img/logo.svg";
import burger from "../../assets/img/menu icon.svg";
import { Burger } from "../BurgerMenu/Burger";

const linksArr = [
  { text: "About me", active: false },
  { text: "Relationships", active: false },
  { text: "Requirements", active: false },
  { text: "Users", active: false },
  { text: "Sign Up", active: false },
];

export const Navbar = () => {
  const [links, setLinks] = useState(linksArr);
  const [open, setOpen] = useState(false);

  const activeHandler = (event) => {
    const id = event.target.dataset.id;
    setLinks(
      links.map((link, index) => {
        link.active = false;
        if (index.toString() === id) {
          link.active = true;
        }
        return link;
      })
    );
  };

  const openLeftMenu = () => {
    setOpen(true);
  };
  const closeLeftMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img
              onClick={(event) => activeHandler(event)}
              src={logo}
              alt="logo"
            />
          </a>
          <img className="burger" src={burger} alt="" onClick={openLeftMenu} />
          <ul className="navbar-nav flex-row ">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  href="/tt/#register"
                  data-id={index}
                  onClick={(event) => activeHandler(event)}
                  className={`nav-link ${link.active ? "active" : ""}`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Burger open={open} closeMenu={closeLeftMenu} />
    </>
  );
};
