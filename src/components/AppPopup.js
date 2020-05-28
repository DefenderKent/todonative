import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Alert} from 'react-native';

export const AppPopup = ({visible, onCancel, value, onSave, value2}) => {
  const [title, setTitle] = useState(value);
  const [text, setText] = useState(value2);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Ошибка!',
        `Минимальная длинас названия 3 символа. Сейчас ${
          title.trim().length
        } символов`,
      );
    } else {
      onSave(title, text);
    }
  };

  const cancelHandler = () => {
    setTitle(value);
    setText(value2);
    onCancel();
  };
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите название"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="описание"
          autoCapitalize="none"
          autoCorrect={false}
          multiline
        />
        <View style={styles.sectionbtn}>
          <Button title="Отменить" onPress={cancelHandler} />
          <Button title="Сохранить" onPress={saveHandler} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: '#429aff',
    borderBottomWidth: 2,
    width: '80%',
  },
  sectionbtn: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
