import React, { useState } from 'react';
import CombustivelSelector from './CombustivelSelector';
import MarcaSelector from './MarcaSelector';
import MunicipioSelector from './MunicipioSelector';
import DistritoSelector from './DistritosSelector';
import '../styles/Formulario.css';
import TiposPostosSelector from './TiposPostos';


const Formulario = () => {
  const [combustivel, setCombustivel] = useState('');
  const [marca, setMarca] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [distritoId, setDistritoId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Combustível: ${combustivel}, Marca: ${marca}, Município: ${municipio}`);
  };

  return (
    <form className="formulario-container" onSubmit={handleSubmit}>
    <h2>FILTROS:</h2>
    
    <div className="select-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.2rem' }}>
    <DistritoSelector onDistritoChange={setDistritoId} />
    <MunicipioSelector distritoId={distritoId} />
      <CombustivelSelector />
      <MarcaSelector />
      <TiposPostosSelector />
    </div>

    <div className="button-group">
      <button type="submit">Procurar</button>
      <button type="reset">Limpar</button>
    </div>
  </form>
  );
};

export default Formulario;
