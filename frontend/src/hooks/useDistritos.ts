import { useState, useEffect } from 'react';
import { getDistritos } from '../api/distritos';

interface Distrito {
  Id: number;
  Descritivo: string;
}

const useDistritos = () => {
  const [distritos, setDistritos] = useState<Distrito[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDistritos = async () => {
      try {
        const data = await getDistritos();
        setDistritos(data);
      } catch {
        setError('Erro ao carregar distritos.');
      } finally {
        setLoading(false);
      }
    };

    fetchDistritos();
  }, []);

  return { distritos, loading, error };
};

export default useDistritos;
