import { LoginButton } from "./components/inicioSesion/login";
import { useAuth0 } from "@auth0/auth0-react";
import Inicio from "./components/usuario/Inicio/inicio";
import { Prestamo } from "./components/usuario/Libros/SolicitarLibro/prestamo";
import "./App.css";
import Navbar from "./components/UI/NavBar";
import ConsultaLibros from "./components/usuario/Libros/ConsultarLibros/consultarLibros";
import InicioAdmin from "./components/secretaria/inicio/inicio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LogoutButton } from "./components/inicioSesion/cerrarSesion";
import Usuario from "./components/usuario/Inicio/inicio";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" exact element={<Inicio />} />
              <Route path="/prestamo" element={<Prestamo />} />
              <Route path="/consulta" element={<ConsultaLibros />} />
            </Routes>
          </Router>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
      <Router>
        <Routes>
          <Route path="/inicioadmin" element={<InicioAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
