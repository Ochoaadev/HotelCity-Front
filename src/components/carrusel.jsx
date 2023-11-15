// Importa bibliotecas necesarias
import React, { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// Definición de la función Carrusel
function Carrusel() {
   // Array de imágenes para el carrusel
   const images = [
      '../src/assets/Hotel.png',
      '../src/assets/Carrusel1.png',
      '../src/assets/Carrusel2.png'
   ];

   // Estado para el índice de la imagen actual
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   // Efecto para cambiar la imagen cada 3 segundos
   useEffect(() => {
      const interval = setInterval(() => {
         nextSlide();
      }, 3000); // Cambia cada 3 segundos
      return () => clearInterval(interval);
   }, [currentImageIndex]);

   // Función para pasar a la siguiente imagen
   const nextSlide = () => {
      const lastIndex = images.length - 1;
      const shouldResetIndex = currentImageIndex === lastIndex;
      const index = shouldResetIndex ? 0 : currentImageIndex + 1;

      setCurrentImageIndex(index);
   };

   // Función para volver a la imagen anterior
   const prevSlide = () => {
      const lastIndex = images.length - 1;
      const shouldResetIndex = currentImageIndex === 0;
      const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

      setCurrentImageIndex(index);
   };

   // Renderizado del componente
   return (
      <>
         <div className="carousel relative bg-gray-200 ">
            {/* Botón para volver a la imagen anterior */}
            <button 
               onClick={prevSlide} 
               className="text-2xl bg-transparent border-none text-white absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded"
            >
               <RiArrowLeftSLine />
            </button>
            {/* Imagen actual */}
            <div className="w-full overflow-hidden">
               <img 
                  src={images[currentImageIndex]} 
                  alt="" 
                  className="w-full h-64 object-cover rounded shadow-lg transition-all duration-1000 ease-in-out" 
               />
            </div>
            {/* Botón para pasar a la siguiente imagen */}
            <button 
               onClick={nextSlide} 
               className="text-2xl bg-transparent border-none text-white absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded"
            >
               <RiArrowRightSLine />
            </button>
         </div>
      </>
   )
} 

// Exportación del componente
export default Carrusel;
