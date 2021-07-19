import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MemoCard = ({ description, date, groupColor }: any) => {
  return (
    <View style={styles.memoContainer}>
      <Text numberOfLines={4} style={[styles.spacingText, styles.bodyText]}>
        {description}
      </Text>
      <Text style={[styles.spacingText, styles.microText]}>{date}</Text>
      <View
        style={[
          styles.spacingText,
          styles.group,
          { backgroundColor: groupColor },
        ]}
      />
    </View>
  );
};

MemoCard.defaultProps = {
  description: 'lorem ipsum dolor sit',
  date: '17 May 2021',
  groupColor: '#5272E4',
};

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 16,
  },
  memoContainer: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    flex: 1,
  },
  spacingText: {
    marginBottom: 10,
  },
  microText: {
    fontSize: 12.8,
    color: '#575757',
  },
  group: {
    width: 25,
    borderRadius: 10,
    padding: 2,
  },
});

export default MemoCard;
