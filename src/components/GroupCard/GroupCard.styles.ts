import { Dimensions } from 'react-native';
import { colors } from 'react-native-elements';

export const componentStyles = {
  groupContainer: {
    margin: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').width / 2 - 35,
    width: Dimensions.get('screen').width / 2 - 25,
  },
  titleContainer: {
    paddingVertical: 2.5,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: colors.white,
    fontSize: 12,
  },
};
