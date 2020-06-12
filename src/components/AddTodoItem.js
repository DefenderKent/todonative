import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export const AddTodoItem = ({item, onRemove, onOpen}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(item)}
      onLongPress={() => {
        onRemove(item.id);
      }}>
      <View style={styles.todo}>
        <Text style={styles.texttodo}>{item.title}</Text>
        <Text style={styles.iconblock}>
          {item.wasted ? (
            <Text style={styles.texttodo}>
              <Icon name="exclamationcircleo" size={30} color="orange" />
            </Text>
          ) : (
            <Text>
              <Icon name="book" size={30} color="forestgreen" />
            </Text>
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  todo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: 'deepskyblue',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  texttodo: {fontSize: 20},
  iconblock: {},
});
