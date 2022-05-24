import axios from "axios";
const search = (data) => {
  return axios.get(`http://localhost:8080/api/products/search?q=${data.q} `);
};
export { search };
