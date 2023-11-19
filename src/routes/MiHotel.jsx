import Header from "../components/Header"
import Info from '../components/Info'
import Advanced from '../components/Benf'
import Footer from '../components/Footer'
import Carrusel from '../components/carrusel'
import { useMatch } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
function MiHotel() {
    const match2 = useMatch("/Home");
    const { user } = useAuth();
    return (
      <>
      <Header/>
    <Info/>
    <Advanced/>
     {/* Modales */}
     {match2 && user.rol == "Admin" ? (
        <>
          <Carrusel/>
        </>
      ) : null}
    
    <Footer/>
        </>
    );
  }
  
  export default MiHotel;
  