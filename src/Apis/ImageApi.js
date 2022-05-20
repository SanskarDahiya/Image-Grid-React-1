import axiosHooks from "axios-hooks";
import Axios from "axios";
const REACT_APP_UNSPLASH_ACCESS_TOKEN = process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN;
if (!REACT_APP_UNSPLASH_ACCESS_TOKEN) {
  alert("No Access Token Available");
}
// https://api.unsplash.com/photos/er9wYHRk55Y?page=1&client_id=ACCESS_TOKEN
const axios = Axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 10000,
  headers: {
    Authorization: `Client-ID ${REACT_APP_UNSPLASH_ACCESS_TOKEN}`,
  },
});
axiosHooks.configure({ axios });

export const fetchImages = (params = {}) => {
  let axiosParams = {
    url: "/photos",
    method: "GET",
    params: {
      page: params.page || 1,
      per_page: 10,
      order_by: "popular", //latest, oldest, popular
    },
  };

  return axiosHooks(axiosParams, { manual: true });
};
