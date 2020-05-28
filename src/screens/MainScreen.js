import React, {useContext, useEffect, useCallback} from 'react';
import {StyleSheet, View, FlatList, Text, Image, AppText} from 'react-native';
import {AddTodo} from '../components/AddTodo';
import {AddTodoItem} from '../components/AddTodoItem';
import {TodoContext} from '../context/todo/todoContext';
import {ScreenContext} from '../context/screen/screenContext';
import {AppLoader} from '../components/ui/AppLoader';

export const MainScreen = () => {
  const {addTodo, todos, deleteItem, setTodos, loading, error} = useContext(
    TodoContext,
  );
  const {changeScreen} = useContext(ScreenContext);

  const loadTodo = useCallback(async () => await setTodos(), [setTodos]);
  useEffect(() => {
    loadTodo();
  }, []);
  if (loading) {
    return <AppLoader />;
  }
  if (error) {
    return (
      <View style={styles.center}>
        <AppText style={styles.error}>{error}}</AppText>
      </View>
    );
  }

  let content = (
    <FlatList
      keyExtractor={keys => keys.id.toString()}
      data={todos}
      renderItem={({item}) => {
        return (
          <AddTodoItem
            item={item}
            onRemove={deleteItem}
            onOpen={changeScreen}
          />
        );
      }}
    />
  );
  if (todos.length === 0) {
    content = (
      <View style={styles.imgcustom}>
        <Image
          style={styles.image}
          source={require('./../../assets/notodo.png')}
        />
        <Text>Ура! У вас нет дел!</Text>
      </View>
    );
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgcustom: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 20,
  },
});
