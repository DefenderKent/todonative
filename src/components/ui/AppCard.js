import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const AppCard = props => {
  return (
    <View style={{...styles.default, ...props.style}}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'gold',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
});
