import AsyncStorage from '@react-native-async-storage/async-storage';
import { Memo, Group } from './types';

export const fetchMemosFromStorage = async (): Promise<Memo[]> => {
  let memos = null;
  memos = await fetchFromStorage('memos');

  return memos;
};

export const fetchGroupsFromStorage = async (): Promise<Group[]> => {
  let groups = null;
  groups = await fetchFromStorage('groups');

  return groups;
};

export const fetchFromStorage = async (item: string): Promise<any[]> => {
  let fetchData = null;

  try {
    let data: any = await AsyncStorage.getItem(item);
    fetchData = data ? JSON.parse(data) : [];

    fetchData.sort(sortByDate);
    fetchData.reverse();
  } catch (err) {
    console.error(err);
    fetchData = [];
  }

  return fetchData;
};

export const postMemosToStorage = async (memos: Memo) => {
  await postToStorage('memos', memos);
};

export const postGroupToStorage = async (group: Group) => {
  await postToStorage('groups', group);
};

export const updateMemoToStorage = async (memo: Memo) => {
  let listOfMemos = await fetchMemosFromStorage();

  listOfMemos.filter((item) => item.memoId === memo.memoId);
  listOfMemos.push(memo);

  await updateToStorage('memos', listOfMemos);
};

const postToStorage = async (item: string, postData: any) => {
  try {
    let data: any = await AsyncStorage.getItem(item);
    let list = data ? JSON.parse(data) : [];
    list.push(postData);

    await AsyncStorage.setItem(item, JSON.stringify(list));
  } catch (err) {
    console.error(err);
  }
};

const updateToStorage = async (item: string, postData: any) => {
  try {
    await AsyncStorage.setItem(item, JSON.stringify(postData));
  } catch (err) {
    console.error(err);
  }
};

const sortByDate = (date1: Memo, date2: Memo) =>
  date1.creationDate.valueOf() - date2.creationDate.valueOf();
