import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MemoCard from '../components/MemoCard';
import Header from '../components/Header';
import FloatingButton from '../components/FloatingButton';
import { MEMOS } from '../utils/constants';

const TITLE = 'My Memos';

const MemoScreen = () => {
  const NUM_MEMOS = MEMOS.length;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title={TITLE} count={NUM_MEMOS} isMemos />
        <FlatList
          numColumns={2}
          data={MEMOS}
          keyExtractor={(item, index) => index + item}
          renderItem={({ item }) => <MemoCard description={item} />}
        />
        <FloatingButton />
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
