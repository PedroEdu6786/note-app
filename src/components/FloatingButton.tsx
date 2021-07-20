import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#2853EC"
      onPress={() => navigation.navigate('MemoForm')}
    >
      <Icon name="add-outline" color="white" size={50} />
    </TouchableHighlight>
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
