import React, { useState } from 'react';
import CombustivelSelector from './CombustivelSelector';
import MarcaSelector from './MarcaSelector';
import MunicipioSelector from './MunicipioSelector';
import DistritoSelector from './DistritosSelector';
import TiposPostosSelector from './TiposPostos';
import '../styles/Formulario.css';
import { Button } from '@mui/material';

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

      <div className="select-group">
        <DistritoSelector onDistritoChange={setDistritoId} />
        <MunicipioSelector distritoId={distritoId} onMunicipioChange={setMunicipio} />
        <CombustivelSelector />
        <MarcaSelector />
        <TiposPostosSelector />
      </div>

      <div className="button-group">
      <Button 
          type="submit" 
          variant="outlined" 
          sx={{
            color: '#2c979e',
            borderColor: '#2c979e',
            backgroundColor: '#ffffff13',
            '&:hover': {
              backgroundColor: '#aedfe243', // Cor verde mais escuro ao passar o mouse
            }
          }}
        >
          Procurar
        </Button>

        {/* Botão Reset com cor personalizada */}
        <Button 
          type="reset" 
          onClick={() => { setDistritoId(''); setMunicipio(''); }} 
          variant="outlined" 
          sx={{
            color: '#d32f2f',
            borderColor: '#d32f2f',
            backgroundColor: '#ffffff13',
            '&:hover': {
              backgroundColor: '#dca7a74a', // Cor vermelha mais escura ao passar o mouse
            }
          }}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default Formulario;
