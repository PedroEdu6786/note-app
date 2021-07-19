import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MemoHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.spacing}>
        <Text style={styles.title}>My Memos</Text>
      </View>
      <View style={styles.spacing}>
        <Text style={styles.bodyText}>0 notes</Text>
      </View>
    </View>
  );
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
