import React from 'react';
import Header from './Header';

function Service(){
  return(
    <>
    <Header/>
        <div id="services">
          <h1 className='text-2xl font-bold mb-8 flex items-center justify-center'>Servicios Disponibles</h1>
          {/*Servicio 1*/}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-8'>  
              <div className='flex flex-col gap-8 mr-20 '>
                <img src="../src/assets/Servicio1.png" className='w-full rounded-3xl object-cover h-56 '/>
                <div>
                  <h3 className="text-xl font-bold flex items-center justify-center">Contamos con las mejores habitaciones, y al mejor precio!</h3>
                  <p className='flex items-center justify-center font-bold'>Habitación estándar: $150 por noche</p>
                  <p className='flex items-center justify-center font-bold'>Suite deluxe: $250 por noche</p>
                  <p className='flex items-center justify-center font-bold'>Junior Suite: $200 por noche</p>
                </div>
          </div>
          {/*Servicio 2*/}
          <div className='flex flex-col gap-2 mr-20'>
              <img src="../src/assets/Servicio2.png" className='w-full rounded-3xl object-cover h-56'/>
              <div>
                  <h3 className="text-xl font-bold flex items-center justify-center">Acercate al Restaurant Gourment</h3>
                  <p className='flex items-center justify-center '>Nuestro Restaurante ofrece deliciosos platos de la cocina andina e internacional</p>
                </div>
          </div>
          {/*Servicio 3*/}
          <div className='flex flex-col gap-2 mr-20'>
              <img src="../src/assets/Servicio3.png" className='w-full rounded-3xl object-cover h-56'/>
              <div>
                  <h3 className="text-xl font-bold flex items-center justify-center">Conoce nuestro Spa y centro de bienestar</h3>
                  <p className='flex items-center justify-center '>Relajate y rejuvenece con nuestros tratamientos de Spa y servicios de masajes, que los encontrarás a partir de $15</p>
                </div>
          </div>
          {/*Servicio 4*/}
          <div className='flex flex-col gap-2 mr-20'>
              <img src="../src/assets/Servicio4.png" className='w-full rounded-3xl object-cover h-56'/>
              <div>
                  <h3 className="text-xl font-bold flex items-center justify-center">Aprovecha de nuestras promoción!</h3>
                  <p className='flex items-center justify-center '>Reserva 4 noches, y recibe la 5ta totalmente gratis!(Valido Hasta el 31 de Diciembre)</p>
                </div>
       </div>
    </div>
  </div>
  </>
  )
}

export default Service;