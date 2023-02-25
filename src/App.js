import { LoginButton } from "./components/inicioSesion/login";
import { useAuth0 } from "@auth0/auth0-react";
import Inicio from "./components/usuario/inicio";
import { Prestamo } from "./components/usuario/prestamo";
import "./App.css";
import Navbar from "./components/UI/NavBar";
import ConsultaLibros from "./components/usuario/consultarLibros";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
