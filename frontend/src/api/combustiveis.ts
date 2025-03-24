import axios from 'axios';

const API_URL = '/api/tipos_combustiveis';

export const getCombustiveis = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar combustíveis:', error);
    throw error;
  }
};
