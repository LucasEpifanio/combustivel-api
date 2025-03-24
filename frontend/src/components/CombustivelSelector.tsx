import React, { useState } from 'react';
import useCombustiveis from '../hooks/useCombustiveis';

const CombustivelSelector = () => {
  const { combustiveis, loading, error } = useCombustiveis();
  const [selectedCombustivel, setSelectedCombustivel] = useState(''); // Estado para armazenar o combustível selecionado

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCombustivel(event.target.value);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', alignContent: 'flex-start', flexDirection: 'column' }}>
        <label htmlFor="combustivel" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Escolha um combustível: </label>
        <select
          id="combustivel"
          value={selectedCombustivel}
          onChange={handleSelectChange}
        >
          <option value="">Selecione um combustível...</option>
          {combustiveis.map((item, index) => (
            <option key={index} value={item.Descritivo}>
              {item.Descritivo}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default CombustivelSelector;
