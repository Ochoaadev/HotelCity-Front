import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Agg from '../components/Modal/AggRoom'
import Edit from '../components/Modal/Edit_Room'

const Habitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const obtenerHabitaciones = async () => {
      try {
        const respuesta = await axios.get('http://localhost:4000/habitaciones');
        setHabitaciones(respuesta.data);
      } catch (error) {
        console.error('Error al obtener las habitaciones:', error);
        setHabitaciones([]); // Se agrega para manejar errores en la solicitud de la API
        console.log(respuesta.data);
      }
    };

    obtenerHabitaciones();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-6">Tipos de habitaciones disponibles</h1>
        <Agg />
        <Edit/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habitaciones.map(habitacion => (
            <div key={habitacion.id} className="bg-gray-100 p-4 rounded-md">
              <img src={habitacion.imagen} alt={habitacion.Tipo} className="w-full h-64 object-cover mb-4 rounded-md" />
              <h2 className="text-xl font-bold">{habitacion.Tipo}</h2>
              <p className="text-gray-600 mb-2">{habitacion.Descripcion}</p>
              <p className="mb-2"><strong>Comodidades:</strong> {habitacion.Comodidad}</p>
              <p className="mb-2"><strong>Tarifa:</strong> {habitacion.Tarifa}</p>
              <p className="mb-2"><strong>Valoración:</strong> {habitacion.Review}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Habitaciones;