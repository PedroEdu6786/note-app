import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { View } from 'react-native';
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native-gesture-handler';
import FormHeader from '../../components/FormHeader/FormHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from '../../../styles/base';
import { screenStyles } from './MemoForm.styles';
import {
  postMemosToStorage,
  updateMemoToStorage,
} from '../../utils/storageHandling';
import { Memo } from '../../utils/types';
import { colors } from '../../../styles/foundation';
import Context from '../../store/context';

const styles = createStyles(screenStyles);

const MemoForm = ({ route, navigation }: any) => {
  const [memoTitle, setMemoTitle] = useState('');
  const [memo, setMemo] = useState('');
  const [memoGroup, setMemoGroup] = useState('');
  const [viewMemo, setViewMemo] = useState(false);
  const inputMemo: any = useRef(null);
  const { globalDispatch }: any = useContext(Context);

  let hasUnsavedChanges = Boolean(memo) || Boolean(memoTitle);

  useEffect(() => {
    if (route.params != null && !viewMemo) {
      const { title, description } = route.params;

      setMemoTitle(title);
      setMemo(description);
      setViewMemo(true);
      return;
    }

    navigation.addListener('beforeRemove', async () => {
      if (hasUnsavedChanges && route.params == null) {
        await submitMemo();
        return;
      }

      const { title, description } = route.params;
      if (memoTitle !== title || memo !== description) await updateMemo();
    });
  }, [navigation, route, memo, memoTitle, hasUnsavedChanges]);

  const focusInput = () => inputMemo.current.focus();

  const submitMemo = useCallback(async () => {
    if (!hasUnsavedChanges) {
      navigation.navigate('Memos');
      return;
    }

    let newMemo: Memo = {
      memoId: memoTitle + Math.random(),
      title: memoTitle,
      description: memo,
      creationDate: new Date(),
      groupId: memoGroup,
    };

    await postMemosToStorage(newMemo);
    globalDispatch({ type: 'UPDATE_MEMOS', payload: newMemo });

    setMemoTitle('');
    setMemo('');
    setMemoGroup('');
    navigation.navigate('Memos');
  }, [memo, memoTitle, hasUnsavedChanges]);

  const updateMemo = useCallback(async () => {
    const { title, description, memoId } = route.params;
    if (title === memoTitle && description === memo) {
      navigation.navigate('Memos');
      return;
    }

    let updateMemo: Memo = {
      memoId,
      title: memoTitle,
      description: memo,
      creationDate: new Date(),
      groupId: memoGroup,
    };

    await updateMemoToStorage(updateMemo);

    setMemoTitle('');
    setMemo('');
    setMemoGroup('');
    navigation.navigate('Memos');
  }, [memo, memoTitle, hasUnsavedChanges, route]);

  return (
    <SafeAreaView>
      <View style={[styles.margin, styles.background]}>
        <FormHeader submitForm={route.params ? updateMemo : submitMemo} />
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
