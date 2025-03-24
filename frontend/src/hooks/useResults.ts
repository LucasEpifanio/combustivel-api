import { useState, useEffect } from 'react';
import axios from 'axios';

interface Posto {
  Nome: string;
  Latitude: number;
  Longitude: number;
  Preco: string;
  Combustivel: string;
}

const useResults = () => {
  const [postos, setPostos] = useState<Posto[]>([]);  // Tipando o estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('/api/results');
        setPostos(response.data); // Aqui você armazena os postos no estado
      } catch (err) {
        setError('Erro ao carregar Resultados');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return { postos, loading, error };
};

export default useResults;
