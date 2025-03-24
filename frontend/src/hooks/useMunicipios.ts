import { useState, useEffect } from 'react';
import { getMunicipios } from '../api/municipios';

// Tipando o Municipios
interface Municipios {
    id: number;
    Descritivo: string;
}

const useMunicipios = () => {
  const [municipios, setMunicipios] = useState<Municipios[]>([]);  // Tipando o estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMunicipios = async () => {
      try {
        const data = await getMunicipios();
        setMunicipios(data);
      } catch (err) {
        setError('Erro ao carregar Municipios');
      } finally {
        setLoading(false);
      }
    };

    fetchMunicipios();
  }, []);

  return { municipios, loading, error };
};

export default useMunicipios;
