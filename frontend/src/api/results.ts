import axios from 'axios';

const API_URL = '/api/results';

export const getResults = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar resultados:', error);
    throw error;
  }
};
