import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export async function getProductsLimit(skip: number, limit: number) {
  try {
    const { data } = await axios.get(`/products`, {
      params: {
        skip,
        limit,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
