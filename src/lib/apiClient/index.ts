import ky from 'ky';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const client = ky.extend({
  prefixUrl: API_BASE_URL,
  headers: {
    Authorization:
      'Bearer rIJIXyTw4GfpYPhC/TXwaA==$NANz4IEMTa+dcZ2SHzEmD9Og3ZH84YeONjGm/vR0xQ/3I8fARwhEzTNbRhh53yhPW2MTVz7kt+3ckE1U+NUkCQ==',
  },
});

export default client;
