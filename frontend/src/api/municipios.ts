import axios from 'axios';

const API_URL = '/api/municipios';

export const getMunicipios = async (distritoId: string) => {
  try {
    const response = await axios.get(`${API_URL}?distrito_id=${distritoId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar municípios:', error);
    throw error;
  }
};