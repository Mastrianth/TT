import React from "react";
import "./burger.scss";
import logo from "../../assets/img/logo.svg";

const links = [
  [
    { text: "About me" },
    { text: "Relationships" },
    { text: "Users" },
    { text: "Sign Up" },
    { text: "Terms and Conditions" },
  ],
  [
    { text: "How it works" },
    { text: "Partnership" },
    { text: "Help" },
    { text: "Leave testimonial" },
    { text: "Contact us" },
  ],
  [
    { text: "Articles" },
    { text: "Our news" },
    { text: "Testimonials" },
    { text: "Licenses" },
    { text: "Privacy Policy" },
  ],
];

export const Burger = (props) => {
  return (
    <>
      <div
        className={`opacity-bg ${props.open ? "open" : ""}`}
        onClick={props.closeMenu}
      />
      <div className={`left-menu ${props.open ? "open" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {links.map((block, index) => {
          return (
            <div className="left-menu-block" key={index}>
              <ul>
                {block.map((link, index) => {
                  return (
                    <li key={index}>
                      <a
                        href="/tt/#register"
                        data-id={index}
                        onClick={props.closeMenu}
                      >
                        {link.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
