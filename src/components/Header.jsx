import React, {useState} from "react"
import {RiMenu3Line, RiCloseFill } from 'react-icons/ri'

function Header(){
    const [showMenu, SetshowMenu] = useState(false)
    return(
        <header className="bg-AzulO flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[14vh] z-50">
            <div className="xl:w-1/6 text-center -mt-4">
                <a href="#" className="text-2xl font-bold p-1" >
                    <img src="../src/assets/Logo.png" className="w-30 h-28 mt-5 ml-20" />
                </a>
            </div>
            <nav className={`fixed bg-AzulO w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"}
             top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center transition-all duration-500 z-50`}
             >
                <a href="#home" className="font-bold text-blanco">
                    Home
                </a>
                <a href="#aboutUs" className="font-bold text-blanco">
                    About Us
                </a>
                <a href="#advantages" className="font-bold text-blanco">
                    Advantages
                </a>
                <a href="#services" className="font-bold text-blanco">
                    Services
                </a>
            </nav>
            <button onClick={()=>SetshowMenu(!showMenu)} className="xl:hidden text-2xl p-2"
            >
                {showMenu ? <RiCloseFill/>:<RiMenu3Line/> }
            </button>
        </header>
    )
}

export default Header