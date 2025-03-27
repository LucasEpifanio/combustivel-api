import React, { useState } from 'react';
import useDistritos from '../hooks/useDistritos';

interface DistritoSelectorProps {
  onDistritoChange: (id: string) => void;
}

const DistritoSelector: React.FC<DistritoSelectorProps> = ({ onDistritoChange }) => {
  const { distritos, loading, error } = useDistritos();
  const [selectedDistrito, setSelectedDistrito] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    console.log("🔹 Distrito selecionado (ID):", selectedId);
    setSelectedDistrito(selectedId);
    onDistritoChange(selectedId); 
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0.4rem', flexDirection: 'column' }}>
        <label htmlFor="distrito" style={{ fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems:'flex-start' }}>Escolha um distrito:</label>
        <select id="distrito" value={selectedDistrito} onChange={handleSelectChange}>
          <option value="">Selecione um distrito...</option>
          {distritos.map((item) => (
            <option key={item.id} value={item.id}>
              {item.Descritivo}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DistritoSelector;
