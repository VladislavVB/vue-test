import axios from "./axios.js";

const register = credentials => {
  return axios.post('/users', {user: credentials})
}

export default {
  register
}