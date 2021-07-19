import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MemoCard from '../components/MemoCard';
import MemoHeader from '../components/MemoHeader';
import { MEMOS } from '../utils/constants';

const MemoScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MemoHeader />
        <FlatList
          numColumns={2}
          data={MEMOS}
          keyExtractor={(item, index) => index + item}
          renderItem={({ item }) => <MemoCard description={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default MemoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 15,
    height: '100%',
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
