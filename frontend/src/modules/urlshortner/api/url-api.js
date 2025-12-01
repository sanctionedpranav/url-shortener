import { apiClient } from "../../../shared/services/api-client"

export const shortenerApiCall = async (urlObj) => {
  try {
    const response = await apiClient.post('/short-url', urlObj);
    return response;
  } catch (err) {
    console.log("Error is: ", err);
    throw err;
  }
}