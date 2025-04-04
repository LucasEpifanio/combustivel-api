import { useState } from 'react';
import { getMunicipios } from '../api/municipios';

interface Municipio {
  Id: number;
  Descritivo: string;
}

const useMunicipios = () => {
  const [municipios, setMunicipios] = useState<Municipio[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMunicipios = async (distritoId: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getMunicipios(distritoId);
      setMunicipios(data);
    } catch {
      setError('Erro ao carregar municípios.');
    } finally {
      setLoading(false);
    }
  };

  return { municipios, loading, error, fetchMunicipios };
};

export default useMunicipios;
