import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/login.css";
import InicioAdmin from "../secretaria/inicio/inicio";
import { useNavigate, Link } from "react-router-dom";

export const LoginButton = () => {
  const { loginWithRedirect, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "https://dev-us9rhyra.us.auth0.com/api/v2/",
          scope: "read:current_user update:current_user_metadata",
        });
        const roles = token["https://dev-us9rhyra.us.auth0.com/roles"];
        if (roles.includes("Admin")) {
          console.log("Hola Administrador");
          // Redirect to admin dashboard
        } else if (roles.includes("User")) {
          console.log("Hola Usuario");
          // Redirect to user dashboard
        }
      } catch (e) {
        console.log(e);
      }
    };
    checkUserRole();
  }, [getAccessTokenSilently]);

  return (
    <div className="backgr">
      <div className="inicioAdmin">
        <main role="main" className="container my-auto">
          <button className="btn-volver btn btn-close"></button>
          <div className="row">
            <div
              id="login"
              className="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12"
            >
              <h2 className="text-center">Administrador</h2>
              <img
                className="img-fluid mx-auto d-block rounded"
                src="https://static.thenounproject.com/png/2665047-200.png"
              />

              <form id="formlogin">
                <div className="form-group">
                  <label for="usuario">Usuario</label>
                  <input
                    id="usuario"
                    name="usuario"
                    className="form-control"
                    type="user"
                    placeholder="Usuario"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Contraseña</label>
                  <input
                    id="password"
                    name="password"
                    className="form-control"
                    type="password"
                    placeholder="Contraseña"
                  />
                </div>
                <br />
                <button
                  type="submit"
                  onClick={validar}
                  className="btn btn-primary mb-2"
                >
                  Entrar
                </button>
                <br />
              </form>
            </div>
          </div>
        </main>
      </div>

      <div className="btn-estudiante">
        <br></br>
        <button onClick={loginWithRedirect} className="btn btn-dark">
          Soy Estudiante
        </button>
      </div>
    </div>
  );
  function validar() {
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {
      alert("Bienvenido " + user);
      <InicioAdmin />;
      //Ruta para el inicio de Secretaria
    } else alert("Error al Iniciar Sesión");
  }
};
