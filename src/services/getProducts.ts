import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export async function getProducts() {
  try {
    const { data } = await axios.get("/products?limit=194");
    return data;
  } catch (error) {
    console.log(error);
  }
}

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
