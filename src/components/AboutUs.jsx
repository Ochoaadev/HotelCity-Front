import React from 'react'

function About(){
    return(
        <div className="p-8  xl:p-20 bg-crema">
            <div className='mb-4'>
                <h1 className="text-[40px] font-bold mb-5">¿Quienes Somos?</h1>
                <p className="text-xl text-black-500">
                    "El Dorado de los Andes" tiene sus raíces en la rica historia de la región andina de Mérida, Venezuela
                </p>
            </div>
            {/*Principal */}
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
                <div className='flex flex-col gap-8 mt-20'>
                    <img src="../src/assets/Merida.png" className="w-full object-cover rounded-3xl"/>
                        <p className='text-black text-justify font-bold'>
                        Fundado en 1990 por una familia local apasionada por la hospitalidad y la belleza natural de la zona, el hotel ha sido un destino de confianza para viajeros que buscan experimentar la majestuosidad de los Andes venezolanos.
                        </p>
                        <p className='text-justify text-black font-bold'>
                        A lo largo de los años, hemos mantenido nuestro compromiso con la comodidad, la calidad y la atención personalizada, ofreciendo a nuestros huéspedes una experiencia inolvidable en un entorno mágico.
                        </p>
                </div>
                {/*Secundarios*/}
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
            </div>
        </div>
    )
}

export default About