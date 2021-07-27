import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyles from '../../../styles/base';
import { componentStyles } from './FloatingButton.styles';

const styles = createStyles(componentStyles);

const FloatingButton = ({ screen }: any) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#2853EC"
      onPress={() => navigation.navigate(screen)}
    >
      <Icon name="add-outline" color="white" size={50} />
    </TouchableHighlight>
  );
};

export default FloatingButton;
