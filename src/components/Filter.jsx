import React, { useState } from 'react';

const Filter = ({handleFilterChange}) => {
  const [tipo, setTipo] = useState('');
  const [nombre, setNombre] = useState('');

  const handleTipoChange = (e) => {
    const newTipo = e.target.value;
    setTipo(newTipo);
    handleFilterChange({ tipo: newTipo, nombre });
  };

  const handleNombreChange = (e) => {
    const newNombre = e.target.value;
    setNombre(newNombre);
    handleFilterChange({ tipo, nombre: newNombre });
  };

  return (
    <div className="filter-container">
      <h3>Filtrar Mascotas</h3>
      
      <label>
        Tipo:
        <select value={tipo} onChange={handleTipoChange}>
          <option value="">Todos</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Conejo">Conejo</option>
        </select>
      </label>

      <label>
        Nombre:
        <input 
          type="text" 
          value={nombre} 
          onChange={handleNombreChange} 
        />
      </label>
    </div>
  );
};

export default Filter;