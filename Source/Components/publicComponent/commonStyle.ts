import {StyleSheet} from 'react-native';

const makeStyles = (theme: any) => {
  const {colors} = theme;
  return StyleSheet.create({
    mainctr1: {},
    textOne: {
      fontSize: 30,
      fontWeight: '700',
      color: colors.primary,
    },
    subTitle: {
      fontSize: 16,
      fontWeight: '400',
    },
    FieldTitle: {
      fontSize: 16,
      fontWeight: '500',
    },
  });
};

export default makeStyles;
