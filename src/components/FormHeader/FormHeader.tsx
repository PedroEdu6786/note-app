import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyles from '../../../styles/base';
import { componentStyles } from './FormHeader.styles';

const styles = createStyles(componentStyles);

const FormHeader = ({ submitForm }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={submitForm}>
        <Icon name="chevron-back-outline" size={20} />
        <Text style={styles.buttonFont}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormHeader;
