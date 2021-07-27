import { Dimensions } from 'react-native';
import { colors, space } from '../../../styles/foundation';

export const screenStyles = {
  margin: {
    padding: 20,
    paddingTop: 0,
  },
  container: {
    marginTop: 20,
    height: '100%',
  },
  inputContainer: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 0,
  },
  colorOption: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: space.sm,
    width: 10,
  },
  colorSelectorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  colorContainer: {
    alignItems: 'center',
    width: Dimensions.get('window').width / 6,
    marginBottom: 10,
  },
  colorSelected: {
    borderColor: colors.background,
    borderWidth: 2,
    padding: space.xm,
    borderRadius: 40,
    width: 55,
  },
};
