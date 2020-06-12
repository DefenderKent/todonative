import {baseUrl} from './../../App';
const urlTodo = baseUrl;

export const todoAPI = {
  getTodos() {
    return fetch(`${urlTodo}/posts`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
  },
};
