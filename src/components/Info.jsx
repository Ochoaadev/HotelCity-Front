import React from 'react';
import { RiPhoneFill } from 'react-icons/ri';

function Info() {
    return (
      <section className="bg-blanco h-[90vh] grid grid-cols-1 md:grid-cols-8 ">
        {/* Informacion */}
        <div className="md:col-span-5 flex items-center justify-center p-16">
          <div className="flex flex-col gap-8 text-center">
            <h1 className="text-6xl font-bold md:text-6xl loading-[6,5rem] ">
              Bienvenido al hotel
              <span className="text-orange-600 py-2 px-6">El dorado de los Andes</span>{" "}
            </h1>
            <p className="font-bold text-black text-xl md:text-2xl leading-[3rem]">
            Disfruta de nuestras agradables y cómodas instalaciones para que tengas una experiencia excepcional e inolvidable.
            </p>
            {/* <p className="font-bold text-black text-xl md:text-2xl leading-[2,5rem]">
              Ubicados en la Urbanizacion La hacienda Av Principal # 4-61, Mérida 5101 Venezuela
            </p> */}
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
        {/* Imagen */}
        <div className="md:col-span-3 flex items-center justify-center relative">
          <img
            src="../src/assets/Hotelv2.jpg"
            className="w-full h-auto object-cover md:w-auto md:h-auto md:object-cover rounded-3xl "
            alt="Hotel"
          />
        </div>

        
      </section>
    );
 }

export default Info;

