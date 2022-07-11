import PropTypes from "prop-types";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-hrefp`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <buthrefn
          className="navbar-hrefggler"
          type="buthrefn"
          data-bs-hrefggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="hrefggle navigation"
        >
          <span className="navbar-hrefggler-icon"></span>
        </buthrefn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item ">
              <a className="nav-link active" href="/about">
                {props.about}
              </a>
            </li> */}
          </ul>
          <div className="form-check form-switch me-5">
            <input
              className="form-check-input success"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              // onClick={props.func}
              onClick={() => {
                props.func();
              }}
            />
            {/* <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light" ? "dark" : "light"}
              </label> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  // title: PropTypes.string.isRequired // --> required field or it'll throw error...!
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "SetTitles",
  about: "About",
  mode: "light",
};
