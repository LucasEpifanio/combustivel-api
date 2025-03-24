import React, { useState } from 'react';
import useMunicipios from '../hooks/useMunicipios';

const MunicipioSelector = () => {
  const { municipios, loading, error } = useMunicipios();
  const [selectedMunicipio, setSelectedMunicipio] = useState(''); // Estado para armazenar o combustível selecionado

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMunicipio(event.target.value);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div style={{ fontSize: '1.1rem', color: 'red' }}>{error}</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start', alignContent: 'flex-start', flexDirection: 'column' }}>
        <label htmlFor="municipio" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Escolha um combustível: </label>
        <select
          id="municipio"
          value={selectedMunicipio}
          onChange={handleSelectChange}
        >
          <option value="">Selecione um combustível...</option>
          {municipios.map((item, index) => (
            <option key={index} value={item.Descritivo}>
              {item.Descritivo}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MunicipioSelector;
