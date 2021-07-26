import React from 'react';
import { View, Text } from 'react-native';
import createStyles from '../../../styles/base';
import { GROUPS } from '../../utils/constants';
import { parseDate } from '../../utils/date';
import { Memo } from '../../utils/types';
import { componentStyles } from './MemoCard.styles';

const styles = createStyles(componentStyles);

const MemoCard = ({ description, creationDate, groupId }: Memo) => {
  const groupColor: any = GROUPS.find((group) => groupId === group.id) || {
    color: 'black',
  };

  let date = parseDate(creationDate);

  return (
    <View style={styles.memoContainer}>
      <Text numberOfLines={4} style={[styles.spacingText, styles.body]}>
        {description}
      </Text>
      <Text style={[styles.spacingText, styles.microText]}>{date}</Text>
      <View
        style={[
          styles.spacingText,
          styles.group,
          { backgroundColor: groupColor.color },
        ]}
      />
    </View>
  );
};

MemoCard.defaultProps = {
  description: 'lorem ipsum dolor sit',
  date: '17 May 2021',
};

export default MemoCard;
