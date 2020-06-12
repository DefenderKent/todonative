/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Component} from 'react';

import {MainLayout} from './src/MainLayout';
import {TodoState} from './src/context/todo/TodoState';

// import {initializeApp} from './src/context/todo/TodoState';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert, Button} from 'react-native';
import {CommonScreen} from './src/screens/CommonScreen';
import {RareScreen} from './src/screens/RareScreen';
import {ImmortalScreen} from './src/screens/ImmortalScreen';
import {TodoScreen} from './src/screens/TodoScreen';
import {Provider} from 'react-redux';
import store from './src/redux/redux-store.js';

// ПОМЕНЯЙТЕ URL НА ВАШ, ЕГО МОЖНО ВЗЯТЬ ИЗ КОМАНДНОЙ СТРОКИ
//ПОСЛЕ ЗАПУСКА ДВУХ КОМАНД В ДВУХ РАЗНЫХ ТЕРМИННАЛАХ:
// 1-я команда: json-server -w db.json
// 2-я команда: npm run tunnel
// после второй команды из терминала нужно взять ссылку на против "Forwarding"
export const baseUrl = `http://0095d9940b07.ngrok.io`;

const Stack = createStackNavigator();
export default class App extends Component {
  componentDidMount() {
    // Alert.alert(
    //   'Инструкция',
    //   `Вас приветствует приложение "AppTodo" На'\' главной странице можно добавить задачу. Для этого нужно ввести название и выбрать срочность, после чего кликнуть на название задачи и отредактировать под себя!         Приятной работы.`,
    //   [
    //     {
    //       text: 'Продолжить',
    //       style: 'cancel',
    //     },
    //   ],
    //   {cancelable: false},
    // );
  }
  render() {
    return (
      <Provider store={store}>
        <TodoState>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={MainLayout}
                options={{
                  headerRight: () => (
                    <Button
                      onPress={() => alert('This is a button!')}
                      title="Info"
                      color="forestgreen"
                    />
                  ),
                }}
              />
              <Stack.Screen name="Common" component={CommonScreen} />
              <Stack.Screen name="Средние" component={RareScreen} />
              <Stack.Screen name="Срочные" component={ImmortalScreen} />
              <Stack.Screen name="TodoScreen" component={TodoScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </TodoState>
      </Provider>
    );
  }
}
