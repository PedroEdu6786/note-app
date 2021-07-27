import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MemoCard from '../../components/MemoCard/MemoCard';
import Header from '../../components/Header/Header';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import { fetchMemosFromStorage } from '../../utils/storageHandling';
import { Memo } from '../../utils/types';
import createStyles from '../../../styles/base';

const TITLE = 'My Memos';
const styles = createStyles();

const MemoScreen = () => {
  const [memoList, setMemoList] = useState<Memo[]>([]);
  const NUM_MEMOS = memoList.length;

  useEffect(() => {
    fetchMemos();
  }, []);

  const fetchMemos = async (): Promise<void> => {
    let memos: Memo[] = await fetchMemosFromStorage();
    if (!memos) return;

    setMemoList(memos);
  };

  return (
    <SafeAreaView>
      <View style={[styles.container, styles.background]}>
        <Header title={TITLE} count={NUM_MEMOS} isMemos />
        <FlatList
          numColumns={2}
          data={memoList}
          keyExtractor={(item) => item.memoId.toString()}
          renderItem={({ item }) => <MemoCard {...item} />}
        />
        <FloatingButton screen={'MemoForm'} />
      </View>
    </SafeAreaView>
  );
};

export default MemoScreen;
