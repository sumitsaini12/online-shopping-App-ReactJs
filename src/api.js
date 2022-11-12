import axios from "axios";

export const getProductData = (id) => {
  return axios.get("https://dummyjson.com/products/" + id);
}

// export const getProductList = () => {
//   console.log("getProductList");
//   return axios.get("https://dummyjson.com/products");
// }


export const getProductList = (num) => {
  return axios.get(`https://dummyjson.com/products?skip=${num}`);
};