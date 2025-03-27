import React, { useState } from 'react';
import useTiposPostos from '../hooks/useTiposPostos';

const TiposPostosSelector = () => {
  const { tiposPostos, loading, error } = useTiposPostos();
  const [selectedTiposPostos, setSelectedTiposPostos] = useState(''); // Estado para armazenar o combustível selecionado

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTiposPostos(event.target.value);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start', alignContent: 'flex-start', flexDirection: 'column' }}>
        <label htmlFor="tipoPosto" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Escolha o tipo de posto: </label>
        <select
          id="tipoPosto"
          value={selectedTiposPostos}
          onChange={handleSelectChange}
        >
          <option value="">Selecione um tipo de posto...</option>
          {tiposPostos.map((item, index) => (
            <option key={index} value={item.Descritivo}>
              {item.Descritivo}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TiposPostosSelector;
