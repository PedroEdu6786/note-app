import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from '../../../styles/base';
import { colors } from '../../../styles/foundation';
import FormHeader from '../../components/FormHeader/FormHeader';
import Context from '../../store/context';
import { colorSelector } from '../../utils/constants';
import { postGroupToStorage } from '../../utils/storageHandling';
import { Group } from '../../utils/types';
import { screenStyles } from './GroupForm.styles';

const styles = createStyles(screenStyles);

const GroupForm = () => {
  const [groupTitle, setGroupTitle] = useState('');
  const [colorSelected, setColorSelected] = useState('');
  const { globalDispatch }: any = useContext(Context);
  const navigation = useNavigation();

  let hasUnsavedChanges = Boolean(groupTitle) && Boolean(colorSelected);

  useEffect(() => {
    navigation.addListener('beforeRemove', async () => {
      if (hasUnsavedChanges) await submitGroup();
    });
  }, [navigation, groupTitle, colorSelected, hasUnsavedChanges]);

  const submitGroup = async () => {
    if (!hasUnsavedChanges) {
      navigation.navigate('Groups');
      return;
    }

    let newGroup: Group = {
      groupId: groupTitle + Math.random(),
      title: groupTitle,
      color: colorSelected,
      creationDate: new Date(),
    };

    await postGroupToStorage(newGroup);
    globalDispatch({ type: 'UPDATE_GROUPS', payload: newGroup });

    setGroupTitle('');
    setColorSelected('');
    navigation.navigate('Groups');
  };

  const selectColor = (index: any) => {
    setColorSelected(colorSelector[index]);
  };

  return (
    <SafeAreaView>
      <View style={[styles.margin, styles.background]}>
        <FormHeader submitForm={submitGroup} />
        <TouchableOpacity activeOpacity={1} style={styles.container}>
          <TextInput
            value={groupTitle}
            placeholder="Group Title"
            placeholderTextColor={colors.gray}
            style={[styles.title, styles.spacing]}
            onChangeText={setGroupTitle}
            autoFocus
            autoCapitalize="sentences"
            selectionColor={colors.primary}
            disableFullscreenUI
          />
          <Text style={styles.subTitle}>Select a group color</Text>
          <View style={styles.colorSelectorContainer}>
            {colorSelector.map((color, index) => (
              <View key={index} style={styles.colorContainer}>
                <TouchableOpacity
                  style={
                    colorSelected === color
                      ? [styles.colorSelected, { borderColor: 'black' }]
                      : [styles.colorSelected]
                  }
                  onPress={() => selectColor(index)}
                >
                  <View
                    style={[styles.colorOption, { backgroundColor: color }]}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GroupForm;
