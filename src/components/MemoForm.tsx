import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import FormHeader from './FormHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const MemoForm = () => {
  const [memoTitle, setMemoTitle] = useState('');
  const [memo, setMemo] = useState('');
  const [memoGroup, setMemoGroup] = useState(0);
  const inputMemo: any = useRef(null);
  const navigation = useNavigation();
  let hasUnsavedChanges = Boolean(memo) || Boolean(memoTitle);

  useEffect(() => {
    navigation.addListener('beforeRemove', async (e) => {
      if (hasUnsavedChanges) await submitMemo();
    });
  }, [navigation, memo, memoTitle, hasUnsavedChanges]);

  const focusInput = () => {
    inputMemo.current.focus();
  };

  const submitMemo = useCallback(async () => {
    if (!hasUnsavedChanges) {
      navigation.navigate('Memos');
      return;
    }

    let id = memoTitle + Math.random();

    const newMemo = {
      id,
      title: memoTitle,
      description: memo,
      date: new Date(),
      group_id: memoGroup,
    };

    try {
      let memos: any = await AsyncStorage.getItem('memos');
      let listMemos = memos ? JSON.parse(memos) : [];

      listMemos.push(newMemo);

      await AsyncStorage.setItem('memos', JSON.stringify(listMemos));

      setMemoTitle('');
      setMemo('');
      setMemoGroup(0);
      navigation.navigate('Memos');
    } catch (err) {
      console.error(err);
    }
  }, [memo, memoTitle, hasUnsavedChanges]);

  return (
    <SafeAreaView>
      <View style={styles.margin}>
        <FormHeader submitMemo={submitMemo} />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.container}
          onPress={focusInput}
        >
          <ScrollView
            keyboardDismissMode="interactive"
            style={styles.inputContainer}
          >
            <TextInput
              value={memoTitle}
              placeholder="Memo Title"
              placeholderTextColor="#5E5E5E"
              style={[styles.titleInput, styles.spacing]}
              onChangeText={setMemoTitle}
              autoFocus
              autoCapitalize="sentences"
              selectionColor="#5272E4"
              onSubmitEditing={focusInput}
              disableFullscreenUI
            />
            <TextInput
              ref={inputMemo}
              value={memo}
              placeholder="Enter your memo"
              placeholderTextColor="#5E5E5E"
              style={[styles.input, styles.spacing]}
              onChangeText={setMemo}
              multiline
              autoCapitalize="sentences"
              selectionColor="#5272E4"
              disableFullscreenUI
            />
          </ScrollView>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MemoForm;

const styles = StyleSheet.create({
  margin: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#F6F6F6',
  },
  container: {
    alignItems: 'stretch',
    height: '100%',
  },
  inputContainer: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 0,
  },
  titleInput: {
    fontSize: 31.3,
    fontWeight: 'bold',
    backgroundColor: '#F6F6F6',
  },
  input: {
    fontSize: 16,
    backgroundColor: '#F6F6F6',
  },
  spacing: {
    marginTop: 20,
  },
});
