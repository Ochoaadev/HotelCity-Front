import React from 'react'
import {RiInstagramLine , RiFacebookBoxLine , RiWhatsappLine } from "react-icons/ri"

function Footer(){
    return(
        <footer className='bg-AzulO xl:p-15 p-1 '>
            {/*Logo */}
            <div className='flex items-center justify-between border-b pb-8'>
                <a href="#" className="text-2xl font-bold p-1" >
                    <img src="../src/assets/Logo.png" className="w-30 h-28 mt-5 ml-20" />
                </a>
                {/*Redes Sociales */}
                <nav className='flex items-center justify-center gap-4'>
                    <a href="#" className='block text-black p-4 rounded-full bg-crema'>
                        {""}<RiInstagramLine/>
                    </a>
                    <a href="#" className='block text-black p-4 rounded-full bg-crema'>
                        {""}<RiFacebookBoxLine/>
                    </a>
                    <a href="#" className='block text-black p-4 rounded-full bg-crema'>
                        {""}<RiWhatsappLine/>
                    </a>
                </nav>
            </div>
            <p className='text-blanco font-bold flex items-center justify-center p-4'>
            El Dorado de los Andes © 2023 All rights reserved
            </p>
        </footer>
    )
}

export default Footer