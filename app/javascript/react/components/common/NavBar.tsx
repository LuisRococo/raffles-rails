import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={routes.home} className="navbar-brand">
          <img style={styles.logo} src="/assets/logo.webp" alt="" />
          Raffle Waffles
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={routes.home}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  logo: {
    width: "50px",
    marginRight: "10px",
  },
};

export default NavBar;
