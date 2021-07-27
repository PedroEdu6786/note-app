import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from '../../../styles/base';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import GroupCard from '../../components/GroupCard/GroupCard';
import Header from '../../components/Header/Header';
import { fetchGroupsFromStorage } from '../../utils/storageHandling';
import { Group } from '../../utils/types';

const TITLE = 'My Groups';

const styles = createStyles();

const GroupScreen = () => {
  const [groupList, setGroupList] = useState<Group[]>([]);
  const NUM_GROUPS = groupList.length;

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async (): Promise<void> => {
    let groups: Group[] = await fetchGroupsFromStorage();
    if (!groups) return;

    setGroupList(groups);
  };

  return (
    <SafeAreaView>
      <View style={[styles.container, styles.background]}>
        <Header title={TITLE} count={NUM_GROUPS} />
        <FlatList
          numColumns={2}
          data={groupList}
          keyExtractor={(item) => `${item.groupId}`}
          renderItem={({ item }) => <GroupCard {...item} />}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
        <FloatingButton screen={'GroupForm'} />
      </View>
    </SafeAreaView>
  );
};

export default GroupScreen;
