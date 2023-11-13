import React from 'react'
import {RiCheckboxBlankCircleFill, RiPhoneFill} from 'react-icons/ri'

function Info(){
    return(
        <section className="bg-crema h-[90vh] grid grid-cols-1 md:grid-cols-8">  {/*Cambiar fondo */}
            {/*Informacion */}
            <div className='md:col-span-5 flex items-center justify-center p-8'>
                <div className="flex flex-col gap-8">
                    <h1 className="text-6xl font-bold loading-[6,5rem]">
                        Bienvenido al Hotel{""}
                        <span className='text-orange-600 py-2 px-6'>
                            Belensate
                            {/* <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -top-5 p-2 bg-beige rounded-full box-content'/>
                            <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -top-5 p-2 bg-beige rounded-full box-content'/>
                            <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -bottom-5 p-2 bg-beige rounded-full box-content'/>
                            <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -bottom-5 p-2 bg-beige rounded-full box-content'/> */}
                        </span> 
                        </h1>
                    <p className='font-bold text-black text-xl leading-[3rem]'>Encontrará el mejor servicio y al mejor precio!</p>
                    <p className='font-bold text-black text-xl leading-[2,5rem]'>Ubicados en la Urbanizacion La hacienda Av Principal # 4-61, Mérida 5101 Venezuela</p>
                    <div className="flex items-center justify-center">
                    <button className="bg-orange-600 text-white py-2 px-6 font-bold rounded-xl text-xl">
                        <div className="flex items-center">
                            <span>Contactos</span>
                            <RiPhoneFill className="ml-2" />
                        </div>
                    </button>
                    </div>
                </div>
            </div>
            {/*Imagen */}
            <div className='md:col-span-3 flex items-center justify-center relative'>
                <img src="./public/Hotel.png" className="w-auto h-auto object-cover mr-16"/>
                <img src=""className /> 
            </div>
        </section>
    )
}

export default Info



