import axios from "axios";

const productApi = axios.create({
    baseURL : `http://localhost:8000/api/v1/products/`
});

export default productApi;