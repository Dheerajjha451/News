import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBuilding, FaFilm, FaHeartbeat, FaFlask, FaFutbol, FaLaptop, FaNewspaper } from 'react-icons/fa';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <FaNewspaper />NewsSD
          </Link>
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
                <Link className="nav-link" aria-current="page" to="/">
                  <FaHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Business">
                  <FaBuilding /> Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Entertainment">
                  <FaFilm /> Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Health">
                  <FaHeartbeat /> Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Science">
                  <FaFlask /> Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Sports">
                  <FaFutbol /> Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Technology">
                  <FaLaptop /> Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
