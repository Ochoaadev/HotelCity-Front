import Header from "./components/Header";
import Info from './components/Info';
import Advanced from './components/Benf';
import Footer from './components/Footer';
import About from './components/AboutUs'
import Login from './routes/Login';
import Carrusel from './components/carrusel';
import Register from "./routes/Register"
import Service from './components/services'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpProvider from "./contexts/UpProvider";
import ProtectedRoute from "./ProtecRoutes";
import { AuthProvider, useAuth } from "./contexts/AuthProvider";
import Home from "./routes/MiHotel"
import FormularioReservas from "./routes/Formulario_Reservas";
import Room from './routes/Room'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <UpProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/Registro" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/AboutUs" element={<About />} />
              <Route path="/Servicios" element={<Service/>} />
              <Route path="/Habitaciones" element={<Room/>} />
              <Route element={<ProtectedRoute rol={["User", "Admin"]} />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/Reservas" element={<FormularioReservas />} />
              </Route>
             
              {/* //Faltan los permisos */}
            </Routes>
          </UpProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;