import React from 'react';
import './App.css';

function App() {
  // Array con los colores
  const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];

  return (
    <div className="App">
      <h1>Lista de Colores</h1>
      {/* Lista con los colores */}
      <ul>
        {colores.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

