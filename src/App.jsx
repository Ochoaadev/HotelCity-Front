import Header from "./components/Header"
import Info from './components/Info'
import Advanced from './components/Benf'
import Footer from './components/Footer'
import Carrusel from './components/carrusel'
import Users from "./routes/Users";
import Register from "./routes/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpProvider from "./contexts/UpProvider";
import ProtectedRoute from "./ProtecRoutes";
import { AuthProvider, useAuth } from "./contexts/AuthProvider";
import Login from "./routes/Login"
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <UpProvider>
            <Routes>
              <Route path="/" element={<Info />} />
              <Route path="/Registro" element={<Register />} />
              <Route path="/Login" element ={<Login/>} />
              {/* //Faltan los permisos */}
            </Routes>
          </UpProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
