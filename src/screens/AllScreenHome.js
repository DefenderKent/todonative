import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Moment from 'react-moment';

export const AllScreen = () => {
  return (
    <View>
      <Moment element={Text} format="HH:mm YYYY/MM/DD" />
      <Text>Test: </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
