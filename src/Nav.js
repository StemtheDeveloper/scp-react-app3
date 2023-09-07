import React from "react";
import ReactDOM from "react-dom/client";
import SCPlogo from "./assets/SCP logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SubButton from "./SubButton";
import "./Nav.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import styles from "./styles.css";

export default function Nav() {
  return (
    <nav className="nav">
      <img src={SCPlogo} id="scpLogo" alt="SCP logo" />
      <Link to="/" className="site-title">
        SCP Foundation
      </Link>
      <ul>
        <CustomLink to="/Scp049">SCP-049</CustomLink>
        <CustomLink to="/Scp096">SCP-096</CustomLink>
        <CustomLink to="/Scp106">SCP-106</CustomLink>
        <CustomLink to="/Scp173">SCP-173</CustomLink>
        <CustomLink to="/Scp682">SCP-682</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
