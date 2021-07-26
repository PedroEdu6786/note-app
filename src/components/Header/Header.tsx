import React from 'react';
import { Text, View } from 'react-native';
import createStyles from '../../../styles/base';
import { componentStyles } from './Header.styles';

const styles = createStyles(componentStyles);

const MemoHeader = ({ title, count, isMemos }: any) => {
  const numCards = isMemos ? `${count} memos` : `${count} groups`;
  return (
    <View style={styles.container}>
      <View style={styles.spacing}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.spacing}>
        <Text style={styles.body}>{numCards}</Text>
      </View>
    </View>
  );
};

MemoHeader.defaultProps = {
  title: 'My Title',
  count: 0,
  isMemos: false,
};

export default MemoHeader;
