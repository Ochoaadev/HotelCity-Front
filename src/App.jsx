import Header from "./components/Header"
import Info from './components/Info'
import About from './components/AboutUs'
import Advanced from './components/Benf'
import Footer from './components/Footer'
import Carrusel from './components/carrusel'
import Service from './components/services'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form_reservas from "./routes/Formulario_Reservas";
function App() {


  return (
    <>
    <Header/>
    <Info/>
    <Carrusel/>
    <About/>
    <Advanced/>
    <Service/>
    <Footer/>
    </>
  )
}

export default App
