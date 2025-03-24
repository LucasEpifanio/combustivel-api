import { useState, useEffect } from 'react';
import { getMarcas } from '../api/marcas';

// Tipando o Marcas
interface Marcas {
    id: number;
    Descritivo: string;
}

const useMarcas = () => {
  const [marcas, setMarcas] = useState<Marcas[]>([]);  // Tipando o estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const data = await getMarcas();
        setMarcas(data);
      } catch (err) {
        setError('Erro ao carregar marcas');
      } finally {
        setLoading(false);
      }
    };

    fetchMarcas();
  }, []);

  return { marcas, loading, error };
};

export default useMarcas;
