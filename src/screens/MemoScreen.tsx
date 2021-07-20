import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MemoCard from '../components/MemoCard';
import Header from '../components/Header';
import FloatingButton from '../components/FloatingButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TITLE = 'My Memos';

const MemoScreen = () => {
  const [memoList, setMemoList] = useState([]);

  const fetchMemos = async () => {
    try {
      let data: any = await AsyncStorage.getItem('memos');
      let memos = data ? JSON.parse(data) : [];

      if (!memos) return;

      memos.push(memoList);

      setMemoList(memos);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMemos();
  }, []);

  const NUM_MEMOS = memoList.length;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title={TITLE} count={NUM_MEMOS} isMemos />
        <FlatList
          numColumns={2}
          data={memoList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <MemoCard {...item} />}
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
