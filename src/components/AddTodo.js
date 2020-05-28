import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');
  const [clock, setClock] = useState(false);

  const [pick, setPick] = useState(false);
  const [pick2, setPick2] = useState(false);
  const akertttt = () => {
    Alert.alert(
      'Время настало',
      `Это убирает добавление времени`,
      [
        {
          text: 'Продолжить',
        },
      ],
      {cancelable: false},
    );
  };
  const [pick3, setPick3] = useState(false);

  const pressHandler = () => {
    if (!value.trim()) {
      console.log('picks', pick, pick2, pick3);
      Alert.alert('Выберте важность задачи! \nПоле не должно быть пустым!');
    } else {
      onSubmit(value, pick, pick2, pick3, clock);
      setValue('');
    }
  };
  return (
    <View style={styles.block}>
      <View style={styles.addtodobtn}>
        <Button
          color="silver"
          style={styles.common}
          title="Обычные"
          onPress={() => {
            setPick(true);
          }}
        />
        <Button
          color="orange"
          style={styles.rare}
          title="Средние"
          onPress={() => {
            setPick2(true);
          }}
        />
        <Button
          style={styles.immortal}
          title="Срочные"
          onPress={() => {
            setPick3(true);
          }}
        />
      </View>
      <View style={styles.clock}>
        <Icon.Button
          name="clockcircleo"
          color="white"
          marginRight={-9}
          size={30}
          style={styles.common}
          onPress={() => {
            setClock('');
            akertttt();
          }}
        />
      </View>
      <View style={styles.addtodo}>
        <TextInput
          style={styles.input}
          onChangeText={text => setValue(text)}
          value={value}
          placeholder="Название задачи"
        />
        <Button title="Добавить" onPress={pressHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'dodgerblue',
  },
  addtodo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  addtodobtn: {flexDirection: 'row'},
  clock: {
    marginTop: 10,
  },
  common: {justifyContent: 'center'},
});
