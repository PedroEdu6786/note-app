import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const MemoCard = ({ title, color }: any) => {
  const letter = title.split('')[0];
  return (
    <View style={styles.groupContainer}>
      <Text style={[styles.letterFont, { color: color }]}>{letter}</Text>
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

const styles = StyleSheet.create({
  groupContainer: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').width / 2 - 35,
    width: Dimensions.get('screen').width / 2 - 25,
  },
  letterFont: {
    fontSize: 39.06,
    fontWeight: 'bold',
  },
  titleContainer: {
    paddingVertical: 2.5,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
    fontSize: 12,
  },
});

export default MemoCard;
