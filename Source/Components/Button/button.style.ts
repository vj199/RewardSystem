import {StyleSheet} from 'react-native';

const makeStyles = (theme: any) => {
  const {colors} = theme;
  return StyleSheet.create({
    btn: {
      backgroundColor: colors.secondary,
      borderRadius: 10,
      color: colors.primary,
    },
    btn_radius: {
      borderRadius: 8,
      padding: 4,
    },
  });
};

export default makeStyles;
