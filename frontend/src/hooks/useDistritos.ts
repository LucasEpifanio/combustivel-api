import { useState, useEffect } from 'react';
import { getDistritos } from '../api/distritos';

// Tipando o Combustivel
interface Distrito {
    id: number;
    Descritivo: string;
}

const useDistritos = () => {
  const [distritos, setDistritos] = useState<Distrito[]>([]);  // Tipando o estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDistritos = async () => {
      try {
        const data = await getDistritos();
        setDistritos(data);
      } catch (err) {
        setError('Erro ao carregar combustíveis');
      } finally {
        setLoading(false);
      }
    };

    fetchDistritos();
  }, []);

  return { distritos, loading, error };
};

export default useDistritos;
