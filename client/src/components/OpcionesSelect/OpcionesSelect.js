import React from 'react';

const OpcionesSelect = ({ opciones, onSelect }) => (
  <select onChange={(e) => onSelect(e.target.value)} className="w-full p-2 border rounded">
    <option value="">Selecciona una opción adicional</option>
    {opciones.map((opcion) => (
      <option key={opcion.id} value={opcion.id.toString()}>
        {opcion.nombre} (${opcion.precio})
      </option>
    ))}
  </select>
);

export default OpcionesSelect;