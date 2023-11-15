import React from 'react';
import { BiHotel, BiShower, BiRestaurant, BiCar, BiPhone, BiCheck } from 'react-icons/bi';

function Advanced () {
 return (
    <div id="advantages" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">¿Por qué elegir el Hotel El Dorado de los Andes?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            {/*Referencia 1 */}
            <BiHotel className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Sistema de Reservas Online</h3>
          </div>
          <p className="text-gray-700">Disfrute de una estadía cómoda y servicios personalizados con nuestro sistema de reservas en línea fácil de usar.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            {/*Referencia 2 */}
            <BiShower className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Seguridad y Comodidad</h3>
          </div>
          <p className="text-gray-700">Su seguridad y comodidad son nuestra prioridad. Todas nuestras habitaciones cuentan con botón de llamada de emergencia, aire acondicionado y wifi gratuito.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            {/*Referencia 3 */}
            <BiRestaurant className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Comida Deliciosa y Saludable</h3>
          </div>
          <p className="text-gray-700">Disfrute de nuestras sabrosas y saludables opciones de desayuno en el restaurante del hotel. ¡No olvides explorar nuestra ciudad para vivir una deliciosa aventura culinaria!</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            {/*Referencia 4 */}
            <BiCar className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Servicio de transporte de cortesía</h3>
          </div>
          <p className="text-gray-700">Ofrecemos servicio de transporte gratuito para transportarlo a las atracciones cercanas y de regreso a su hotel. Simplemente relájate y disfruta de tus vacaciones.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            {/*Referencia 5*/}
            <BiPhone className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Atención al cliente 24 horas al día, 7 días a la semana</h3>
          </div>
          <p className="text-gray-700">Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana para ayudarlo con cualquier inquietud o consulta que pueda tener. Su satisfacción es nuestra máxima prioridad.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            {/*Referencia 6 */}
            <BiCheck className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Tarifas Accesible</h3>
          </div>
          <p className="text-gray-700">Experimente una comodidad excepcional y servicios de calidad a una excelente relación calidad-precio. Aprovecha al máximo tu estancia y disfruta de experiencias inolvidables.</p>
        </div>
      </div>
    </div>
 );
};

export default Advanced;