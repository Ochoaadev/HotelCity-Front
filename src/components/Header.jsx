import { useNavigate } from 'react-router-dom';
import React, {useState} from "react"
import {RiMenu3Line, RiCloseFill } from 'react-icons/ri'
function Header(){
    const navigate = useNavigate();
    const handleOpenForm = () => {
        navigate("/formulario_reservas");
    };
    const handleOpenHome = () => {
        navigate("/");
    };
    const handleOpenAbutUs = () => {
        navigate("/AboutUs");
    };
    const handleOpenservices = () => {
        navigate("/services");
    };
    const [showMenu, SetshowMenu] = useState(false)
    return(
        <>
      
        <header className="bg-AzulO flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[14vh] z-50">
            <div className="xl:w-1/6 text-center -mt-4">
                <button className="text-2xl font-bold p-1" onClick={handleOpenHome}>
                    <img src="../src/assets/Logo.png" className="w-30 h-28 mt-3 ml-20" />
                </button>
            </div>
            <nav className={`fixed bg-AzulO w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"}
             top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center transition-all duration-500 z-50`}
            >
            <button className="font-bold text-blanco" onClick={handleOpenHome}>
                Inicio
            </button>
            <button className="font-bold text-blanco" onClick={handleOpenAbutUs}>Sobre Nosotros</button>


<button className="font-bold text-blanco" onClick={handleOpenservices}>Servicios</button>
<button className="font-bold text-blanco" onClick={handleOpenForm}>Reservar</button>
            </nav>
            <button onClick={()=>SetshowMenu(!showMenu)} className="xl:hidden text-2xl p-2"
            >
                {showMenu ? <RiCloseFill/>:<RiMenu3Line/> }
            </button>
        </header>
        
        </>
    )
}

export default Header