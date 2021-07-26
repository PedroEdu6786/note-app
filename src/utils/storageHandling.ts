import AsyncStorage from '@react-native-async-storage/async-storage';
import { Memo } from './types';

export const fetchMemosFromStorage = async (): Promise<Memo[]> => {
  let memos = null;
  try {
    let data: any = await AsyncStorage.getItem('memos');
    memos = data ? JSON.parse(data) : [];

    memos.sort(sortByDate);
    memos.reverse();
  } catch (err) {
    console.error(err);
    memos = [];
  }

  return memos;
};

export const postMemosToStorage = async (memos: Memo) => {
  let memoId = memos.title + Math.random();
  memos.memoId = memoId;

  try {
    let data: any = await AsyncStorage.getItem('memos');
    let memosList = data ? JSON.parse(data) : [];
    memosList.push(memos);

    await AsyncStorage.setItem('memos', JSON.stringify(memosList));
  } catch (err) {
    console.error(err);
  }
};

const sortByDate = (date1: Memo, date2: Memo) =>
  date1.creationDate.valueOf() - date2.creationDate.valueOf();
