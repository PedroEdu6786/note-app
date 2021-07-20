import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingButton from '../components/FloatingButton';
import GroupCard from '../components/GroupCard';
import Header from '../components/Header';
import { GROUPS } from '../utils/constants';

const TITLE = 'My Groups';

const GroupScreen = () => {
  const NUM_GROUPS = GROUPS.length;

  return (
    <SafeAreaView>
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 15,
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 31.25,
  },
  bodyText: {
    fontSize: 16,
  },
  spacing: {
    marginBottom: 30,
  },
});
