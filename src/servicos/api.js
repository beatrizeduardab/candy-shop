import axios from 'axios';

const api = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
});

export const getDoces = async () => {
    try {
          const response = await api.get('/posts');
          return response.data;
    } catch (error) {
        console.error('Erro ao bsucar os doces:', error);
        return [];
    }
}