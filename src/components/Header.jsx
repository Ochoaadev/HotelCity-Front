import { useNavigate } from 'react-router-dom';
//import React, { useState } from "react";
import { RiMenu3Line, RiCloseFill } from 'react-icons/ri';
import { useState, useEffect, useContext } from "react";
import {
  useItemsContext,
  useUpItemsContext,
} from "../contexts/UpProvider";
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleOpenForm = () => {

        navigate("/Reservas");
    };
    const handleOpenHome = () => {
        navigate("/");
    };
    const handleOpenAbutUs = () => {
        navigate("/AboutUs");
    };
    const handleOpenservices = () => {
        navigate("/Servicios");
    };

    const handleOpenRoom = () =>{
        navigate("/Habitaciones")
    }

    const handleLogin = () =>{
        navigate("/Login")
    }

    const handleRegister = () =>{
        navigate("/Registro")
    }


    const [showMenu, SetshowMenu] = useState(false);
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const { user, isAuthenticated, logout, theme, setTheme } = useAuth();
  const [menu, setMenu] = useState(false);

  const update = useUpItemsContext();
    const submitSearch = (e) => {
        e.preventDefault();
        console.log('Buscando:', search);
        //Agregar Lógica
    };

    return (
        <>
            <header className="bg-AzulO flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[14vh] z-50">
                <div className="xl:w-1/6 text-center -mt-4">
                    <button className="text-2xl font-bold p-1" onClick={handleOpenHome}>
                        <img src="../src/assets/Logo.png" className="w-30 h-28 mt-3 mr-36" />
                    </button>
                </div>
                <form className="w-full max-w-md mx-auto mr-7" onSubmit={submitSearch}>
                    <div className="flex items-center border-b border-gray-500 py-2">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-white"
                            type="text"
                            placeholder="Buscar"
                            aria-label="Buscar"
                            value={search}
                            onChange={handleSearch}
                        />
                        <button
                            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded "
                            type="submit"
                        >
                            Buscar
                        </button>
                    </div>
                </form>
                <nav className={`fixed bg-AzulO w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"}
             top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center transition-all duration-500 z-50 mr-[24rem]`}
                >
                    <button className="font-bold text-blanco" onClick={handleOpenHome}>Inicio </button>
                    <button className="font-bold text-blanco" onClick={handleOpenAbutUs}>Sobre Nosotros</button>

                    <button className="font-bold text-blanco" onClick={handleOpenservices}>Servicios</button>


                {/* Modales  || user.rol == "User" //Editar,eli o agregar*/}
                    {(location.pathname === "/" || location.pathname === "/Home" || location.pathname === "/Reservas" || location.pathname === "/Habitaciones") && user.rol == "Admin" ? (
                <>
                <button className="font-bold text-blanco" onClick={handleOpenForm}>Ver Reservas</button>
                <button className="font-bold text-blanco" onClick={handleOpenRoom}>Habitaciones</button> 
                </>
                ) : null}        

                    <button className="font-bold text-blanco" onClick={handleLogin}>Acceder</button>
                    
                    <button className="font-bold text-blanco" onClick={handleRegister}>Registrarse</button>

                </nav>
                <button onClick={() => SetshowMenu(!showMenu)} className="xl:hidden text-2xl p-2">
                    {showMenu ? <RiCloseFill /> : <RiMenu3Line />}
                </button>
            </header>
        </>
    );
}

export default Header