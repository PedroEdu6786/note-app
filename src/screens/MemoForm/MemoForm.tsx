import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import FormHeader from '../../components/FormHeader/FormHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from '../../../styles/base';
import { screenStyles } from './MemoForm.styles';
import { postMemosToStorage } from '../../utils/storageHandling';
import { Memo } from '../../utils/types';
import { colors } from '../../../styles/foundation';

const styles = createStyles(screenStyles);

const MemoForm = () => {
  const [memoTitle, setMemoTitle] = useState('');
  const [memo, setMemo] = useState('');
  const [memoGroup, setMemoGroup] = useState('');
  const inputMemo: any = useRef(null);
  const navigation = useNavigation();
  let hasUnsavedChanges = Boolean(memo) || Boolean(memoTitle);

  useEffect(() => {
    navigation.addListener('beforeRemove', async () => {
      if (hasUnsavedChanges) await submitMemo();
    });
  }, [navigation, memo, memoTitle, hasUnsavedChanges]);

  const focusInput = () => inputMemo.current.focus();

  const submitMemo = useCallback(async () => {
    if (!hasUnsavedChanges) {
      navigation.navigate('Memos');
      return;
    }

    let newMemo: Memo = {
      memoId: '',
      title: memoTitle,
      description: memo,
      creationDate: new Date(),
      groupId: memoGroup,
    };

    await postMemosToStorage(newMemo);

    setMemoTitle('');
    setMemo('');
    setMemoGroup('');
    navigation.navigate('Memos');
  }, [memo, memoTitle, hasUnsavedChanges]);

  return (
    <SafeAreaView>
      <View style={[styles.margin, styles.background]}>
        <FormHeader submitForm={submitMemo} />
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
              placeholderTextColor={colors.gray}
              style={[styles.title, styles.spacing]}
              onChangeText={setMemoTitle}
              autoFocus
              autoCapitalize="sentences"
              selectionColor={colors.primary}
              onSubmitEditing={focusInput}
              disableFullscreenUI
            />
            <TextInput
              ref={inputMemo}
              value={memo}
              placeholder="Enter your memo"
              placeholderTextColor={colors.gray}
              style={[styles.body, styles.spacing, styles.background]}
              onChangeText={setMemo}
              multiline
              autoCapitalize="sentences"
              selectionColor={colors.primary}
              disableFullscreenUI
            />
          </ScrollView>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MemoForm;
