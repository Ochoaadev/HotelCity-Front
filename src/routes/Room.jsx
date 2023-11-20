import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Agg from '../components/Modal/AggRoom'

//DE EJEMPLO, ELIMINARLAS Y EXPORTARLA DE LA BD


const habitaciones = [
  {
    id: 1,
    tipo: 'Habitación individual',
    descripcion: 'Una habitación perfecta para viajeros solitarios. Cómoda y acogedora, con todas las comodidades que necesitas para una estancia agradable.',
    comodidad: 'Cama doble, baño privado, televisión, wifi gratuito',
    imagen: 'habitacion-individual.jpg',
    tarifa: '$100 por noche',
    review: '4.5 estrellas'
  },
  {
    id: 2,
    tipo: 'Habitación doble',
    descripcion: 'Ideal para parejas o amigos que viajan juntos. Espaciosa y confortable, con todo lo necesario para una estancia relajante.',
    comodidad: 'Cama King size, baño privado, balcón privado, minibar, wifi gratuito',
    imagen: 'habitacion-doble.jpg',
    tarifa: '$150 por noche',
    review: '4.7 estrellas'
  },
  {
    id: 3,
    tipo: 'Suite junior',
    descripcion: 'Una lujosa suite perfecta para una escapada romántica o para aquellos que buscan un poco más de espacio y comodidades extra.',
    comodidad: 'Cama King size, sala de estar, baño de lujo, terraza privada, servicio de habitaciones 24/7',
    imagen: 'suite-junior.jpg',
    tarifa: '$250 por noche',
    review: '4.9 estrellas'
  },
  {
    id: 4,
    tipo: 'Suite familiar',
    descripcion: 'Ideal para familias o grupos pequeños. Amplia y acogedora, con todas las comodidades necesarias para una estancia confortable.',
    comodidad: '2 camas dobles, sala de estar, cocina completa, baño privado, televisión en cada habitación',
    imagen: 'suite-familiar.jpg',
    tarifa: '$300 por noche',
    review: '4.8 estrellas'
  },
  {
    id: 5,
    tipo: 'Suite deluxe',
    descripcion: 'Nuestra suite más lujosa para aquellos que buscan lo mejor. Espaciosa, elegante y con todas las comodidades de lujo que puedas imaginar.',
    comodidad: 'Cama King size con dosel, jacuzzi privado, terraza panorámica, servicio de mayordomo 24/7',
    imagen: 'suite-deluxe.jpg',
    tarifa: '$500 por noche',
    review: '5 estrellas'
  }
];

const Habitaciones = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-6">Tipos de habitaciones disponibles</h1> 
      <Agg/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habitaciones.map(habitacion => (
          <div key={habitacion.id} className="bg-gray-100 p-4 rounded-md">
            <img src={habitacion.imagen} alt={habitacion.tipo} className="w-full h-64 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-bold">{habitacion.tipo}</h2>
            <p className="text-gray-600 mb-2">{habitacion.descripcion}</p>
            <p className="mb-2"><strong>Comodidades:</strong> {habitacion.comodidad}</p>
            <p className="mb-2"><strong>Tarifa:</strong> {habitacion.tarifa}</p>
            <p className="mb-2"><strong>Valoración:</strong> {habitacion.review}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Habitaciones;