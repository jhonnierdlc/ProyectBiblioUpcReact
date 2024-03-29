import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./inicioUsuario.css";

export const Inicio = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    isAuthenticated && (
      <div className="inicioUser">
        <img src={user.picture} alt={user.name} />
        <h2>Bienvenido.. {user.name}</h2>
        <p>Email: {user.email}</p>

        <p>Fola</p>
      </div>
    )
  );
};

export default Inicio;
