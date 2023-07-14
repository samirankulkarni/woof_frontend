import axiosInstance from "./axiosInstance";

export const getAllPets = () => {
  return axiosInstance.get("/pet/all");
};

export const getPetsByCategory = ({category}) => {
  return axiosInstance.get(`/pet/category/${category}`);
};

export const getPetsById = ({id}) => {
    return axiosInstance.get(`/pet/get/${id}`);
  };