import axios from 'axios';

export const key = "3f76f760eef972bf5389c6c96dddfb8a2f3d5a0e";

export const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
});
