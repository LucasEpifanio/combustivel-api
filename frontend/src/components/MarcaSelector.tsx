import React, { useState } from 'react';
import useMarcas from '../hooks/useMarcas';

const MarcaSelector = () => {
  const { marcas, loading, error } = useMarcas();
  const [selectedMarca, setSelectedMarca] = useState(''); // Estado para armazenar o combustível selecionado

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMarca(event.target.value);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start', alignContent: 'flex-start', flexDirection: 'column' }}>
        <label htmlFor="marca" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Escolha um posto de abastecimento: </label>
        <select
          id="marca"
          value={selectedMarca}
          onChange={handleSelectChange}
        >
          <option value="">Selecione uma marca de posto...</option>
          {marcas.map((item, index) => (
            <option key={index} value={item.Descritivo}>
              {item.Descritivo}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MarcaSelector;
