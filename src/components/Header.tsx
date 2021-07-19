import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MemoHeader = ({ title, count, isMemos }: any) => {
  const numCards = isMemos ? `${count} memos` : `${count} groups`;
  return (
    <View style={styles.container}>
      <View style={styles.spacing}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.spacing}>
        <Text style={styles.bodyText}>{numCards}</Text>
      </View>
    </View>
  );
};

MemoHeader.defaultProps = {
  title: 'My Title',
  count: 0,
  isMemos: false,
};

export default MemoHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 5,
    backgroundColor: '#F6F6F6',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 31.25,
  },
  bodyText: {
    fontSize: 16,
  },
  spacing: {
    marginBottom: 30,
  },
});
