import React, {useReducer, useContext} from 'react';
import {TodoContext} from './todoContext';
import {Alert} from 'react-native';
import {todoReducer, FETCH_TODOS} from './todoReducer';
import {baseUrl} from './../../../App';
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  HIDE_PRELOADER,
  PRELOADER,
  SHOW_ERROR,
  REMOVE_ERROR,
  INITIALAZED_SUCCESS,
  COMPLETED_TODO,
} from './todoReducer';

export const TodoState = ({children}) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  // let basrUrl = `http://17137858.ngrok.io`;

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addTodo = async (title, common, rare, immortal, datanone) => {
    showLoader();
    clearError();
    try {
      const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title,
          text: 'Добавте описание',
          completed: false,
          common,
          rare,
          data: new Date().toJSON(),
          datanone,
          immortal,
          wasted: false,
          completedDate: '',
        }),
      });
      const data = await response.json();

      dispatch({
        type: ADD_TODO,
        title,
        text: data.text,
        completed: data.completed,
        common,
        rare,
        data: data.data,
        immortal,
        datanone,
        wasted: data.data,
        completedDate: '',
        id: data.id,
      });
    } catch (e) {
      showError('Ошибка');
      console.log(e);
    } finally {
      setTodos();
      hideLoader();
    }
  };
  const deleteItem = id => {
    const element = state.todos.find(t => t.id === id);
    Alert.alert(
      'Удаление',
      `Вы уверенны, что хотите удалить "${element.title}"?`,
      [
        {
          text: 'Отмена',

          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: async () => {
            await fetch(`${baseUrl}/posts/${id}`, {
              method: 'DELETE',
              headers: {'Content-Type': 'application/json'},
            });
            dispatch({type: DELETE_TODO, id});
          },
        },
      ],
      {cancelable: false},
    );
  };
  const setTodos = async () => {
    showLoader();
    const response = await fetch(`${baseUrl}/posts`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    dispatch({type: FETCH_TODOS, todos: data});

    hideLoader();
  };
  const updateTodo = async (
    id,
    title,
    text,
    completed,
    common,
    rare,
    data,
    immortal,
    wasted,
    datanone,
    completedDate,
  ) => {
    clearError();
    try {
      const response = await fetch(`${baseUrl}/posts/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title,
          text,
          completed,
          common,
          rare,
          data,
          immortal,
          wasted,
          datanone,
          completedDate,
        }),
      });
      dispatch({
        type: UPDATE_TODO,
        id,
        title,
        text,
        completed,
        common,
        rare,
        data,
        immortal,
        wasted,
        datanone,
        completedDate,
      });
    } catch (e) {
      showError('Ошибка');
      console.log(e);
    } finally {
      await setTodos();
    }
  };
  const completedTodo = async (
    id,
    title,
    text,
    completed,
    common,
    rare,
    data,
    immortal,
    wasted,
    datanone,
    completedDate,
  ) => {
    clearError();
    try {
      const response = await fetch(`${baseUrl}/posts/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title: title,
          text,
          completed: true,
          common,
          rare,
          data,
          immortal,
          wasted,
          datanone,
          completedDate: new Date().toJSON(),
        }),
      });
      dispatch({
        type: COMPLETED_TODO,
        id,
        title,
        text,
        completed,
        common,
        rare,
        data,
        immortal,
        wasted,
        completedDate,
      });
    } catch (e) {
      showError('Ошибка');
      console.log(e);
    } finally {
      await setTodos();
    }
  };
  const initializedSuccess = () => ({
    type: INITIALAZED_SUCCESS,
  });
  const showLoader = () => dispatch({type: PRELOADER});
  const hideLoader = () => dispatch({type: HIDE_PRELOADER});
  const showError = error => dispatch({type: SHOW_ERROR, error});
  const clearError = () => dispatch({type: REMOVE_ERROR});
  const initializeApp = () => dispatch => {
    let promise = dispatch(setTodos());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        deleteItem,
        updateTodo,
        setTodos,
        initializeApp,
        completedTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
