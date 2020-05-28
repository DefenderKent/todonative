import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo app</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#429aff',
    paddingBottom: 5,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  text: {color: '#fff', fontSize: 18},
});
