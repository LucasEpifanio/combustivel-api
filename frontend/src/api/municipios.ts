import axios from 'axios';

const API_URL = '/api/municipios';

export const getMunicipios = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar municipios:', error);
    throw error;
  }
};
