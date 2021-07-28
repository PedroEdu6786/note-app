import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyles from '../../../styles/base';

const styles = createStyles();

const FormHeader = ({ submitForm }: any) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.align} onPress={submitForm}>
        <Icon name="chevron-back-outline" size={20} />
        <Text style={styles.buttonFont}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormHeader;
