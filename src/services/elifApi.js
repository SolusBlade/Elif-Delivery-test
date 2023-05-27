import axios from "axios";

axios.defaults.baseURL = 'https://6470eeab3de51400f72523bc.mockapi.io';

export const getListProductsApi = () => {
  return axios.get('/api/products').then(res => res.data);
};

export const getProductByIdApi = (id) => {
  return axios.get(`/api/products/${id}`).then(res => res.data);
};

export const postOrderApi = (body) => {
  return axios.post(`/api/orders`, body).then(res => res.data);
};

