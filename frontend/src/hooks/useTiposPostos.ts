import { useState, useEffect } from 'react';
import { getTiposPostos } from '../api/tiposPostos';

// Tipando o Marcas
interface TiposPostos {
    Descritivo: string;
    id: number;
}

const useTiposPostos = () => {
  const [tiposPostos, setTiposPostos] = useState<TiposPostos[]>([]);  // Tipando o estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTiposPostos = async () => {
      try {
        const data = await getTiposPostos();
        setTiposPostos(data);
      } catch (err) {
        setError('Erro ao carregar Tipos de Postos');
      } finally {
        setLoading(false);
      }
    };

    fetchTiposPostos();
  }, []);

  return { tiposPostos, loading, error };
};

export default useTiposPostos;
