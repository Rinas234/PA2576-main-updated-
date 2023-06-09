import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("token"));
  const userType = localStorage.getItem("userType");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    window.location.href = "/"
  };

  function goHome() {
    document.location.href = `/`;
  }

  return (
    <nav className="navbar">
      <img className="logoreact" src={logo} onClick={goHome} alt="Logo" />

      <ul>
        {loggedIn ? (
          <>
            <li onClick={handleLogout}>
              <p>Logout</p>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </>
        )}
        {loggedIn && userType === 'event_organizer' && (
          <>
            <li>
              <Link to="/eventdashboard/createevent">Create Event</Link>
            </li>
            <li>
              <Link to="/eventdashboard">Event Dashboard</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/explore-events">Explore</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
//\src\navbar.js