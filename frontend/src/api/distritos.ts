import axios from 'axios';

const API_URL = '/api/distritos';

export const getDistritos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar distritos:', error);
    throw error;
  }
};


