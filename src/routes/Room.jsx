import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Agg from '../components/Modal/AggRoom'
import Edit from '../components/Modal/Edit_Room'
import DeleteRoom from '../components/Modal/DeletRoom'

const Habitaciones = () => {
<<<<<<< HEAD
 const [habitaciones, setHabitaciones] = useState([]);
 const [habitacionId, setHabitacionId] = useState(null);
 const [userRole, setUserRole] = useState('');
=======
  const [habitaciones, setHabitaciones] = useState([]);
  const [habitacionId, setHabitacionId] = useState(null);
>>>>>>> 33e53f8da1a0f9ecebb26df802b25a0ffd28b2b3

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

 useEffect(() => {
    const obtenerUserRole = async () => {
      try {
        const respuesta = await axios.get('http://localhost:4000/user/role');
        setUserRole(respuesta.data.role);
      } catch (error) {
        console.error('Error al obtener el rol del usuario:', error);
      }
    };

    obtenerUserRole();
 }, []);

 return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-6">Tipos de habitaciones disponibles</h1>
<<<<<<< HEAD
        {userRole === 'Admin' && <Agg />}
=======
<<<<<<< HEAD
        <Agg habitacionId={habitacionId} />
=======
        <Agg />
        <Edit/>
>>>>>>> e1124242768e83d2509f8897486483dbf924d9d8
>>>>>>> 33e53f8da1a0f9ecebb26df802b25a0ffd28b2b3
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habitaciones.map(habitacion => (
            <div key={habitacion._id} className="bg-gray-100 p-4 rounded-md">
              <img src={habitacion.imagen} alt={habitacion.Tipo} className="w-full h-64 object-cover mb-4 rounded-md" />
              <h2 className="text-xl font-bold">{habitacion.Tipo}</h2>
              <p className="text-gray-600 mb-2">{habitacion.Descripcion}</p>
              <p className="mb-2"><strong>Comodidades:</strong> {habitacion.Comodidad}</p>
              <p className="mb-2"><strong>Tarifa:</strong> {habitacion.Tarifa}</p>
              <p className="mb-2"><strong>Valoración:</strong> {habitacion.Review}</p>
<<<<<<< HEAD
              {userRole === 'Admin' && <Edit habitacionId={habitacion} />}
              {userRole === 'Admin' && <DeleteRoom habitacionId={habitacion}/>}
=======
              <button onClick={() => setHabitacionId(habitacion.id)}>Editar</button>
>>>>>>> 33e53f8da1a0f9ecebb26df802b25a0ffd28b2b3
            </div>
          ))}
          
        </div>
      </div>
      <Footer />
    </>
 );
};

<<<<<<< HEAD
export default Habitaciones
=======
export default Habitaciones;
>>>>>>> 33e53f8da1a0f9ecebb26df802b25a0ffd28b2b3
