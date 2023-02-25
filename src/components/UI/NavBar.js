import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../inicioSesion/cerrarSesion";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/navbar.css";
import { Link, Nav } from "react-router-dom";

export const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img
              src="http://ocecolombia.co/wp-content/uploads/2012/02/logo_unicesar.png"
              alt="Logo"
              width="130px"
            />
          </Link>

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
                  <Link className="nav-link" to="/prestamo">
                    Prestamos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/consulta">
                    Consultar Libros
                  </Link>
                </li>
              </ul>
              <img src={user.picture} width="40px" alt={user.name} />
              <h6>{user.name}</h6>
              <LogoutButton />
            </div>
          </div>
        </nav>
      </div>
    )
  );
};

export default Navbar;
