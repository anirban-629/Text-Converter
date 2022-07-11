import PropTypes from "prop-types";
// import React, { useState } from "react";

export default function Navbar(props) {
  // const [dMode,setDMode]=useState('Light');
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
            <div className="form-check form-switch me-5">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.func}
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
