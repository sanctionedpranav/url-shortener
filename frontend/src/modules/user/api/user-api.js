import { apiClient } from "../../../shared/services/api-client"

export const registerApiCall = async (formData) => {
  try {
    const response = await apiClient.post('/register', formData);
    return response;
  } catch (err) {
    console.log("Error is: ", err);
    throw err;
  }
}

export const loginApiCall = async (formData) => {
  try {
    const response = await apiClient.post('/login', formData);
    return response;
  } catch (err) {
    console.log("Error is: ", err);
    throw err;
  }
}