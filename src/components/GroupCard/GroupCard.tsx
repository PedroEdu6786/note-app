import React from 'react';
import { View, Text } from 'react-native';
import createStyles from '../../../styles/base';
import { componentStyles } from './GroupCard.styles';

const styles = createStyles(componentStyles);

const MemoCard = ({ title, color }: any) => {
  const letter = title.split('')[0];
  return (
    <View style={styles.groupContainer}>
      <Text style={[styles.title, { color }]}>{letter}</Text>
      <Text style={[styles.titleContainer, { backgroundColor: color }]}>
        {title}
      </Text>
    </View>
  );
};

MemoCard.defaultProps = {
  title: 'Lorem',
  color: '#6D6D6D',
};

export default MemoCard;
