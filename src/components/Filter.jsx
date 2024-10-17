import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [tipo, setTipo] = useState('');
  const [nombre, setNombre] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ tipo, nombre});
  };

  return (
    <div className="filter-container">
      <h3>Filtrar Mascotas</h3>
      
      <label>
        Tipo:
        <select value={tipo} onChange={(e) => { setTipo(e.target.value); handleFilterChange(); }}>
          <option value="">Todos</option>
          <option value="perro">perro</option>
          <option value="gato">gato</option>
        </select>
      </label>

      <label>
        Nombre:
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => { setNombre(e.target.value); handleFilterChange(); }} 
        />
      </label>
    </div>
  );
};

export default Filter;