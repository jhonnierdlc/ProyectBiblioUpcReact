import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../inicioSesion/cerrarSesion";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" href="#">
          <img
            src="http://ocecolombia.co/wp-content/uploads/2012/02/logo_unicesar.png"
            alt="Logo"
            width="130px"
          />
        </div>

        <div className="container-fluid">
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
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <strong>Registrar Libro</strong>
                </a>
              </li>
            </ul>

            <LogoutButton />
          </div>
        </div>
      </nav>
    </div>
  );
};
