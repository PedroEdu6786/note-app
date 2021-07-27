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
  let memoId = memos.title + Math.random();
  memos.memoId = memoId;

  await postToStorage('memos', memos);
};

export const postGroupToStorage = async (group: Group) => {
  let groupId = group.title + Math.random();
  group.groupId = groupId;

  await postToStorage('groups', group);
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

const sortByDate = (date1: Memo, date2: Memo) =>
  date1.creationDate.valueOf() - date2.creationDate.valueOf();
