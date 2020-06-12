import React, {useContext} from 'react';
import {StyleSheet, View, Alert, Button} from 'react-native';
import {Navbar} from './components/Navbar';
import {MainScreen} from './screens/MainScreen';

export const MainLayout = ({navigation}) => {
  return (
    <View style={styles.inner}>
      <View style={styles.container}>
        <MainScreen navigation={navigation} />
      </View>
      <View style={styles.blockbtn}>
        <View style={styles.allbtn}>
          <Button title="All" onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={styles.allbtn}>
          <Button
            style={styles.common}
            title="Обычные"
            color="silver"
            onPress={() => navigation.navigate('Common')}
          />
        </View>
        <View style={styles.allbtn}>
          <Button
            style={styles.rare}
            color="orange"
            title="Средние"
            onPress={() => navigation.navigate('Средние')}
          />
        </View>
        <View style={styles.allbtn}>
          <Button
            title="Срочные"
            onPress={() => navigation.navigate('Срочные')}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {paddingHorizontal: 30, paddingVertical: 20, flex: 1},
  inner: {flex: 1, paddingBottom: 2},
  blockbtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allbtn: {
    minWidth: '20%',
  },
});
