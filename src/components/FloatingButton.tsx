import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingButton = () => {
  return (
    <View style={styles.container}>
      <Icon name="add-outline" color="white" size={50} />
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    bottom: 20,
    right: 30,
    height: 70,
    width: 70,
    position: 'absolute',
    padding: 5,
    backgroundColor: '#5272E4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70 / 2,
  },
});
