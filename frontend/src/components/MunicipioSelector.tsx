import React, { useState, useEffect } from 'react';
import useMunicipios from '../hooks/useMunicipios';

interface MunicipioSelectorProps {
  distritoId: string;
}

const MunicipioSelector: React.FC<MunicipioSelectorProps> = ({ distritoId }) => {
  const { municipios, loading, error, fetchMunicipios } = useMunicipios();
  const [selectedMunicipio, setSelectedMunicipio] = useState('');

  useEffect(() => {
    if (distritoId) {
      console.log(`🔍 Buscando municípios para o distritoId: ${distritoId}`);
      fetchMunicipios(distritoId);
    }
  }, [distritoId]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMunicipio(event.target.value);
  };

  if (loading) return <div>Carregando municípios...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0.4rem', flexDirection: 'column' }}>
        <label htmlFor="municipio" style={{ fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems:'flex-start' }}>Escolha um município:</label>
        <select id="municipio" value={selectedMunicipio} onChange={handleSelectChange}>
          <option value="">Selecione um município...</option>
          {municipios.map((item) => (
            <option key={item.Id} value={item.Id}>
              {item.Descritivo}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MunicipioSelector;
