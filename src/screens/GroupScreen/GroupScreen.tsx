import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from '../../../styles/base';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import GroupCard from '../../components/GroupCard/GroupCard';
import Header from '../../components/Header/Header';
import { GROUPS } from '../../utils/constants';

const TITLE = 'My Groups';

const styles = createStyles();

const GroupScreen = () => {
  const NUM_GROUPS = GROUPS.length;

  return (
    <SafeAreaView>
      <View style={[styles.container, styles.background]}>
        <Header title={TITLE} count={NUM_GROUPS} />
        <FlatList
          numColumns={2}
          data={GROUPS}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <GroupCard {...item} />}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
        <FloatingButton />
      </View>
    </SafeAreaView>
  );
};

export default GroupScreen;
