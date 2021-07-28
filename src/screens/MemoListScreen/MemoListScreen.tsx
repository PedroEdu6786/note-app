import React, { useCallback, useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MemoCard from '../../components/MemoCard/MemoCard';
import Header from '../../components/Header/Header';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import { fetchMemosFromStorage } from '../../utils/storageHandling';
import { Memo } from '../../utils/types';
import createStyles from '../../../styles/base';
import Context from '../../store/context';

const TITLE = 'My Memos';
const styles = createStyles();

const MemoListScreen = ({ navigation }: any) => {
  const [memoList, setMemoList] = useState<Memo[]>([]);
  const { globalState, globalDispatch }: any = useContext(Context);

  const NUM_MEMOS = memoList.length;

  useEffect(() => {
    if (globalState.memos.length === 0) {
      fetchMemos();
      return;
    }

    setMemoList(globalState.memos);
  }, [globalState]);

  const fetchMemos = async (): Promise<void> => {
    let memos: Memo[] = await fetchMemosFromStorage();
    if (!memos) return;

    globalDispatch({ type: 'SET_MEMOS', payload: memos });
  };

  const navigateToMemo = useCallback(
    (memoId: string) => {
      const memoData = memoList.find((memo) => memo.memoId === memoId);
      navigation.navigate('MemoForm', { ...memoData });
    },
    [memoList, navigation],
  );

  return (
    <SafeAreaView>
      <View style={[styles.container, styles.background]}>
        <Header title={TITLE} count={NUM_MEMOS} isMemos />
        <FlatList
          numColumns={2}
          data={memoList}
          keyExtractor={(item) => item.memoId.toString()}
          renderItem={({ item }) => (
            <MemoCard
              handlePress={() => navigateToMemo(item.memoId)}
              {...item}
            />
          )}
        />
        <FloatingButton screen={'MemoForm'} />
      </View>
    </SafeAreaView>
  );
};

export default MemoListScreen;
