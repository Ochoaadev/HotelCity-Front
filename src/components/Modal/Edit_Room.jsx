import React, { useState } from 'react';
import axios from 'axios';

const UpdateRoom = () => {
    const [formData, setFormData] = useState({
        Tipo: '',
        Descripcion: '',
        Comodidad: '',
        Tarifa: '',
        Review: ''
    });
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const roomId = 'ID_DE_LA_HABITACION'; // Reemplaza esto con el ID de la habitación que deseas editar

        const formData = new FormData();
        for (let key in this.state.formData) {
            formData.append(key, this.state.formData[key]);
        }
        if (file) {
            formData.append('image', file);
        }

        try {
            const response = await axios.put(`http://localhost:4000/room/${roomId}`, formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="Tipo"
                placeholder="Tipo"
                value={formData.Tipo}
                onChange={handleChange}
            />
            <input
                type="text"
                name="Descripcion"
                placeholder="Descripcion"
                value={formData.Descripcion}
                onChange={handleChange}
            />
            <input
                type="text"
                name="Comodidad"
                placeholder="Comodidad"
                value={formData.Comodidad}
                onChange={handleChange}
            />
            <input
                type="number"
                name="Tarifa"
                placeholder="Tarifa"
                value={formData.Tarifa}
                onChange={handleChange}
            />
            <input
                type="text"
                name="Review"
                placeholder="Review"
                value={formData.Review}
                onChange={handleChange}
            />
            <input type="file" name="image" onChange={handleFileChange} />
            <button type="submit">Editar habitación</button>
        </form>
    );
};

export default UpdateRoom;