import { BASE_URL } from "../utils/constant/db"
import axios from 'axios';

export default class TodoService {
  static getTodoLists = async (user_id=7) => {
    return axios.get(`${BASE_URL}?userId=${user_id}`).then((response) => response.data).catch((error) => error)
  }
}