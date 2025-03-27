import { useState } from 'react';
import { getMunicipios } from '../api/municipios';

interface Municipio {
  Id: number;
  Descritivo: string;
  IdDistrito: number;
  Distrito: {
    Descritivo: string;
    Id: number;
  };
}

const useMunicipios = () => {
  const [municipios, setMunicipios] = useState<Municipio[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMunicipios = async (distritoId: string) => {
    if (!distritoId) {
      console.warn('⚠️ Nenhum distritoId fornecido para buscar municípios.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log(`🔍 Fazendo requisição para obter municípios do distrito ${distritoId}`);
      const response = await getMunicipios(distritoId);

      if (response.status && Array.isArray(response.resultado)) {
        console.log('✅ Municípios encontrados:', response.resultado);
        setMunicipios(response.resultado);
      } else {
        console.warn('⚠️ Nenhum município encontrado.');
        setMunicipios([]);
        setError('Nenhum município encontrado.');
      }
    } catch (err) {
      console.error('❌ Erro ao carregar municípios:', err);
      setError('Erro ao carregar municípios.');
    } finally {
      setLoading(false);
    }
  };

  return { municipios, loading, error, fetchMunicipios };
};

export default useMunicipios;
