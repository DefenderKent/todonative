export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const PRELOADER = 'PRELOADER';
export const HIDE_PRELOADER = 'HIDE_PRELOADER';
export const REMOVE_ERROR = 'REMOVE_ERROR';
export const SHOW_ERROR = 'SHOW_ERROR';
export const FETCH_TODOS = 'FETCH_TODOS';
const INITIALAZED_SUCCESS = 'INITIALAZED_SUCCESS';
let initialState = {
  initialized: false,
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALAZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.title,
            text: action.text,
            completed: !action.completed,
            common: action.common,
            data: action.data,
            rare: action.rare,
            wasted: action.wasted,
            immortal: action.immortal,
            datanone: action.datanone,
            completedDate: action.completedDate,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.title = action.title;
            todo.text = action.text;
            todo.completed = action.completed;
            todo.common = action.common;
            todo.rare = action.rare;
            todo.data = action.data;
            todo.immortal = action.immortal;
            todo.wasted = action.wasted;
            todo.datanone = action.datanone;

            todo.completedDate = action.completedDate;
          }
          return todo;
        }),
      };
    case COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.title = action.title;
            todo.text = action.text;
            todo.completed = action.completed;
            todo.common = action.common;
            todo.rare = action.rare;
            todo.data = action.data;
            todo.immortal = action.immortal;
            todo.wasted = action.wasted;
            todo.completedDate = action.completedDate;
          }
          return todo;
        }),
      };
    case PRELOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_PRELOADER:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.todos,
      };
    default:
      return state;
  }
};
