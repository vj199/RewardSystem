import {StyleSheet} from 'react-native';

const makeStyles = (theme: any) => {
  const {colors} = theme;
  return StyleSheet.create({
    error_text: {
      color: colors.error,
    },
    fieldInputStyle: {
      fontSize: 14,
    },
  });
};

export default makeStyles;
