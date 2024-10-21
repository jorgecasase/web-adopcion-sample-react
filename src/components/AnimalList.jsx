import React, { useState, useEffect } from 'react';
import './AnimalList.css';
import Filter from './Filter';
import AdoptionForm from './AdoptionForm';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    fetch('./data/animalAPI.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setAnimals(data.data);
          setFilteredAnimals(data.data); 
        } else {
          console.error('La API no devolvió un array en "data":', data);
        }
      })
      .catch(error => console.error('Error fetching animals:', error));
  }, []);

  const handleFilterChange = (filters) => {
    const { tipo, nombre } = filters;
    console.log(filters);
  
    const filtered = animals.filter(animal => {
      const tipoMatch = tipo ? animal.tipo.toLowerCase().trim() === tipo.toLowerCase().trim() : true; 
      const nombreMatch = nombre ? animal.nombre.toLowerCase().includes(nombre.toLowerCase().trim()) : true; 
  
      return tipoMatch && nombreMatch;
    });

    setFilteredAnimals(filtered);
  };

  const handleAdoptClick = (animal) => {
    const newAnimal = animal;
    setSelectedAnimal(newAnimal);
    console.log(newAnimal);
  };
  const handleCloseForm = () => {
    setSelectedAnimal(null); 
  };

  return (
    <div>
      <h2>Animales Disponibles para Adopción</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <div className="animal-grid">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <div key={animal.id} className="animal-card">
              <img src={animal.imagen} alt={animal.nombre} className="animal-image" />
              <h3>{animal.nombre}</h3>
              <p>Tipo: {animal.tipo}</p>
              <p>Edad: {animal.edad}</p>
              <p>Estado: {animal.estado}</p>
              <p>Genero: {animal.genero}</p>
              <h3>Descripción:</h3>
              <div dangerouslySetInnerHTML={{ __html: animal.desc_personalidad }} />
              <div dangerouslySetInnerHTML={{ __html: animal.desc_adicional }} />
              <div className="color-display">
                <span>Color:</span>
                <div 
                  className="color-box" 
                  style={{ backgroundColor: animal.color }} 
                  title={animal.color} 
                />
              </div>
              <a href={animal.url} target="_blank" rel="noopener noreferrer">Ver más detalles</a>
              <button className='adopt-button' onClick={() => handleAdoptClick(animal)}>Adoptar</button> 
            </div>
          ))
        ) : (
          <p>No se encontraron mascotas que coincidan con los filtros.</p>
        )}
      </div>
      {selectedAnimal && (
        <AdoptionForm animal={selectedAnimal} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default AnimalList;