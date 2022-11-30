import axios from "axios";

export const getProductData = (id) => {
  return axios.get("https://myeasykart.codeyogi.io/product/" + id)
    .then((response) => {
      return response.data
    })
};



export const getProductByIds = (ids) => {
  const commaSepearteIds = ids.join();

  return axios.get("https://myeasykart.codeyogi.io/products/bulk", {
    params: {
      ids: commaSepearteIds,
    }
  })
    .then((response) => {
      return response.data;
    })
};



export const getProductList = (sortBy, search, page, sortType) => {
  let params = {};

  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  if (search) {
    params.search = search;
  }
  if (page) {
    params.page = page;
  }

  return axios.get("https://myeasykart.codeyogi.io/products", {
    params,
  }).then((response) => {
    return response.data;
  })
};



export const saveCart = (cart) => {
  return axios.post("https://myeasykart.codeyogi.io/carts", { data: cart }, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((response) => {
      return response.data;
    })
};

export const getCart = () => {
  return axios.get("https://myeasykart.codeyogi.io/carts", {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then((response) => {
      return response.data;
    })
}