import React from 'react';
import './App.css';

function App() {
  // Paso 1: Crea un array con los colores mencionados
  const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];

  return (
    <div className="App">
      <h1>Lista de Colores</h1>
      {/* Paso 2: Usa el método map para mostrar cada color en un elemento de lista (<li>) */}
      <ul>
        {colores.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

