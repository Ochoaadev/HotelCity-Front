import React from 'react';

function Service(){
  return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-8 mr-20'>
              <img src="../src/assets/Texto1.png" className='w-full rounded-3xl object-cover h-56'/>
            <p className="text-black text-justify">
            Nuestra misión en "El Dorado de los Andes" es proporcionar a nuestros huéspedes una estancia excepcional, combinando la hospitalidad venezolana con servicios de alta calidad y un profundo respeto por la naturaleza. 
          </p>
        </div>
          {/*Secundarios*/}
          <div className='flex flex-col gap-2 mr-20'>
              <img src="../src/assets/Texto2.png" className='w-full rounded-3xl object-cover h-56'/>
              <p className="text-black text-justify">
              Nos esforzamos por crear un ambiente acogedor y seguro donde cada persona se sienta como en casa, a la vez que disfruta de la belleza única de Mérida y sus alrededores. Estamos comprometidos con la excelencia en todo lo que hacemos, desde la atención al cliente hasta la preservación del entorno natural que nos rodea.
              </p>
          </div>
          {/*Secundarios*/}
          <div className='flex flex-col gap-2 mr-20'>
              <img src="../src/assets/Texto3.png" className='w-full rounded-3xl object-cover h-56'/>
              <p className="text-black text-justify">
              Nos comprometemos a preservar y cuidar el entorno natural de Mérida a través de prácticas sostenibles, minimizando nuestro impacto ambiental y promoviendo la conservación de la biodiversidad local.
              </p>
          </div>
          {/*Secundarios*/}
          <div className='flex flex-col gap-2 mr-20'>
              <img src="../src/assets/Texto4.png" className='w-full rounded-3xl object-cover h-56'/>
              <p className="text-black  text-justify">
              Buscamos superar las expectativas de nuestros huéspedes, brindando un servicio de alta calidad, atención personalizada y satisfacción en cada aspecto de su estancia en "El Dorado de los Andes".
              </p>
       </div>
    </div>
  )
}

export default Service;