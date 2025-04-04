import React from 'react';
import useDistritos from '../hooks/useDistritos';

interface Props {
  onDistritoChange: (id: string) => void;
}

const DistritoSelector: React.FC<Props> = ({ onDistritoChange }) => {
  const { distritos, loading, error } = useDistritos();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start', alignContent: 'flex-start', flexDirection: 'column' }}>
        <label htmlFor="distrito" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Escolha um Distrito:</label>
        <select id="distrito" onChange={(e) => onDistritoChange(e.target.value)}>
          <option value="">Selecione um distrito...</option>
          {loading ? (
            <option>Carregando...</option>
          ) : error ? (
            <option>{error}</option>
          ) : (
            distritos.map((distrito) => (
              <option key={distrito.Id} value={distrito.Id}>
                {distrito.Descritivo}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default DistritoSelector;
