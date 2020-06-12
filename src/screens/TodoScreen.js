import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {AppCard} from '../components/ui/AppCard';
import {AppPopup} from '../components/AppPopup';
import {TodoContext} from '../context/todo/todoContext';

export const TodoScreen = ({navigation, route}) => {
  const {todos, updateTodo, deleteItem, completedTodo, setTodos} = useContext(
    TodoContext,
  );

  const item = route.params.item;
  const [modal, setModal] = useState(false);
  const timeAdd = new Date(item.data).toLocaleString();
  const timeAddComplited = new Date(item.completedDate).toLocaleString();

  const saveHandler = async (title, text, completed) => {
    await updateTodo(
      item.id,
      title,
      text,
      item.common,
      item.rare,
      item.completed,
      item.data,
      item.immortal,
      item.wasted,
      item.datanone,
      item.completedDate,
    );
    setTodos();
    setModal(false);
  };
  const saveComplited = () => {
    if (item.completed) {
      Alert.alert('Дело сделано!Друг иди кайфуй');
    } else {
      completedTodo(
        item.id,
        item.title,
        item.text,
        item.common,
        item.rare,
        item.completed,
        item.data,
        item.immortal,
        item.wasted,
        item.datanone,
        item.completedDate,
      );
      setTodos();
    }
  };

  return (
    <View>
      <AppPopup
        value={item.title}
        value2={item.text}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />
      <AppCard style={styles.cardstyle}>
        <View style={styles.headcard}>
          <TouchableOpacity
            style={styles.title}
            activeOpacity={0.5}
            onPress={() => setModal(true)}>
            <View style={styles.title}>
              <Text style={styles.titletext}>{item.title}</Text>
              <Text>
                <Icon name="edit" size={30} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.chekBoxstyle}>
          <Text style={styles.title}>{item.text}</Text>
        </View>
        <View style={styles.taskwasted}>
          <Text style={styles.tasktext}>
            {item.wasted === true ? (
              <Text style={styles.tasktext2}>
                <Text>Задача просрочена:</Text>
                <Icon name="exclamationcircleo" size={30} color="orange" />
              </Text>
            ) : (
              <Text />
            )}
          </Text>
        </View>
        <View style={styles.time}>
          <View>
            <View>
              <Text>Задача добавлена:</Text>
            </View>
            {item.datanone === false ? (
              <Text>{timeAdd}</Text>
            ) : (
              <View>
                <Text>без учёта времени</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.time}>
          <View>
            <Text>Статус выполнения:</Text>
            {item.completed === false ? (
              <View>
                <Text>не сделано</Text>
                <View>
                  <View>
                    <Button title="Выполнить" onPress={saveComplited} />
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View>
                  <Text>Задача выполнена:{timeAddComplited}</Text>
                  <Icon.Button
                    style={styles.complitedbtn}
                    title="Выполнить"
                    name="checkcircleo"
                    onPress={saveComplited}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.buttonstyle}>
          <Button title="назад" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.buttonstyle}>
          <Icon.Button
            color="white"
            size={20}
            style={styles.icomstyles}
            name="delete"
            onPress={() => {
              deleteItem(item.id);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonstyle: {
    width: '40%',
  },
  title: {
    fontSize: 20,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'lavender',
    height: 35,
    justifyContent: 'space-between',
  },
  cardstyle: {
    flexDirection: 'column',
  },
  headcard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  chekBoxstyle: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  mr20: {
    marginLeft: 20,
    alignItems: 'center',
  },
  taskwasted: {
    width: '100%',
    marginBottom: 10,
  },
  tasktext2: {
    fontSize: 17,
  },
  icomstyles: {justifyContent: 'center', backgroundColor: 'orangered'},
  titletext: {fontSize: 20},
  complitedbtn: {backgroundColor: 'forestgreen', justifyContent: 'center'},
  time: {width: '100%', justifyContent: 'space-between'},
});
