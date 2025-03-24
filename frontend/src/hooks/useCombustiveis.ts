import { useState, useEffect } from 'react';
import { getCombustiveis } from '../api/combustiveis';

// Tipando o Combustivel
interface Combustivel {
  Descritivo: string;
}

const useCombustiveis = () => {
  const [combustiveis, setCombustiveis] = useState<Combustivel[]>([]);  // Tipando o estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCombustiveis = async () => {
      try {
        const data = await getCombustiveis();
        setCombustiveis(data);
      } catch (err) {
        setError('Erro ao carregar combustíveis');
      } finally {
        setLoading(false);
      }
    };

    fetchCombustiveis();
  }, []);

  return { combustiveis, loading, error };
};

export default useCombustiveis;
