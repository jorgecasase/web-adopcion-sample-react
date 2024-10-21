import React, { useState } from 'react';
import './AdoptionForm.css';

const AdoptionForm = ({ animal, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert(`Formulario enviado para adoptar a ${animal.nombre}`);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Formulario de Adopción para {animal.nombre}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Mensaje:
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
          </label>
          <button type="submit">Enviar Solicitud</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </form>
      </div>
    </div>
  );
};

export default AdoptionForm;