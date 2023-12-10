import { BASE_URL } from "../utils/constant/db"
import axios from 'axios';

const defaultAxios = (method, url, data) => {
  return axios({
    method,
    url,
    data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
}
export default class TodoService {
  static getTodoLists = async (user_id) => {
    return axios.get(`${BASE_URL}?userId=${user_id}`).then((response) => response.data).catch((error) => error)
  }

  static getTodoListsByPage = async (page = 1) => {
    return axios.get(`${BASE_URL}?_page=${page}`).then((resp) => resp.data).catch((error) => error);
  }

  static createTodo = async (data) => {
    const response = await defaultAxios("post", `${BASE_URL}?userId=${data.userId}`, data);
    return response.data;
  }
  static updateTodo = async (data) => {
    const updateUrl = "https://jsonplaceholder.typicode.com/todos"
    const response = await defaultAxios("put", `${updateUrl}/${data.id}`, data);
    return response.data;
  }
}
