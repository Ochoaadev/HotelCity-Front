import React, {useState} from "react"
import {RiMenu3Line, RiCloseFill } from 'react-icons/ri'

function Header(){
    const [showMenu, SetshowMenu] = useState(false)
    return(
        <header className="bg-beige flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
            <div className="xl:w-1/6 text-center -mt-4">
                <a href="#" className="text-2xl font-bold relative p-1" >
                    Hotel Belensate
                </a>
            </div>
            <nav className={`fixed bg-beige w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"}
             top-0 xl:static flex-1 flex-col xl:flex-row flex items-center gap-10 justify-center transition-all duration-300`}//Acomodar colors
             >
                <a href="#home" className="font-bold">
                    Home
                </a>
                <a href="#About" className="font-bold">
                    About Us
                </a>
                <a href="#Services" className="font-bold">
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