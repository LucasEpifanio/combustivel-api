import axios from 'axios';

const API_URL = '/api/marcas';

export const getMarcas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar combustíveis:', error);
    throw error;
  }
};
