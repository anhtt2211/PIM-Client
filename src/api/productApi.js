import axiosClient from './axiosClient';

const url = '/products';

const productApi = {
  getAll: async () => {
    return await axiosClient.get(url);
  },

  getById: async id => {
    return await axiosClient.get(`${url}/${id}`);
  },
};

export default productApi;
