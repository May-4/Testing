import { BASE_URL } from "../utils/constant/db"
import axios from 'axios';

export const getTodos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/todos`)
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error; // Re-throw the error to propagate it to the calling code
  }
};