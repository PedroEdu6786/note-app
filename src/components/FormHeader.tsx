import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FormHeader = ({ submitMemo }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={submitMemo}>
        <Icon name="chevron-back-outline" size={20} />
        <Text style={styles.buttonFont}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#F6F6F6',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginLeft: -10,
  },
  buttonFont: {
    fontSize: 20,
    fontWeight: '500',
  },
});
