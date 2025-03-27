import axios from 'axios';

const API_URL = '/api/tipos_postos';

export const getTiposPostos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tipos de postos:', error);
    throw error;
  }
};
