import Header from "./components/Header";
import Info from './components/Info';
import Advanced from './components/Benf';
import Footer from './components/Footer';
import Carrusel from './components/carrusel';
import Register from "./routes/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpProvider from "./contexts/UpProvider";
import ProtectedRoute from "./ProtecRoutes";
import { AuthProvider, useAuth } from "./contexts/AuthProvider";
import Login from "./routes/Login"
import Home from "./routes/MiHotel"
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <UpProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route element={<ProtectedRoute rol={["User", "Admin"]} />}>
              <Route path="/Home" element={<Home />} />
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
