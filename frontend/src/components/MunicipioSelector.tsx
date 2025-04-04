import React, { useEffect } from 'react';
import useMunicipios from '../hooks/useMunicipios';

interface Props {
  distritoId: string;
  onMunicipioChange: (id: string) => void;
}

const MunicipioSelector: React.FC<Props> = ({ distritoId, onMunicipioChange }) => {
  const { municipios, loading, error, fetchMunicipios } = useMunicipios();

  useEffect(() => {
    if (distritoId) fetchMunicipios(distritoId);
  }, [distritoId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start', alignContent: 'flex-start', flexDirection: 'column' }}>
        <label htmlFor="municipio" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Escolha um Município:</label>
        <select
          id="municipio"
          onChange={(e) => onMunicipioChange(e.target.value)}
          disabled={!distritoId}
        >
          <option value="">Selecione um município...</option>
          {loading ? (
            <option>Carregando...</option>
          ) : error ? (
            <option>{error}</option>
          ) : (
            municipios.map((municipio) => (
              <option key={municipio.Id} value={municipio.Id}>
                {municipio.Descritivo}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default MunicipioSelector;
