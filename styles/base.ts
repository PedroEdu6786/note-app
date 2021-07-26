import { StyleSheet } from 'react-native';
import { colors, fontSize, space } from './foundation';

const baseStyles: any = {
  title: {
    fontWeight: 'bold',
    fontSize: fontSize.xxl,
    color: colors.font,
  },
  body: {
    fontSize: fontSize.md,
    color: colors.font,
  },
  microText: {
    fontSize: 12.8,
    color: '#575757',
  },
  spacing: {
    marginBottom: space.lg,
  },
  container: {
    height: '100%',
    paddingHorizontal: space.sm,
  },
  background: {
    backgroundColor: colors.background,
  },
  navigation: {
    backgroundColor: colors.background,
    elevation: 0, //android
    shadowOpacity: 0, //ios
  },
  buttonFont: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.font,
  },
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({ ...baseStyles, ...overrides });
}
