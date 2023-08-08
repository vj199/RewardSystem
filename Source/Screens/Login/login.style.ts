import {StyleSheet} from 'react-native';

const makeStyles = (theme: any) => {
  const {colors} = theme;
  return StyleSheet.create({
    loginContainer: {
      backgroundColor: colors.tertiary,
      paddingVertical: 24,
      paddingHorizontal: 18,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      flex: 1,
      display: 'flex',
      height: '100%',
    },
    mainCtr: {
      backgroundColor: colors.surface,
      flex: 1,
    },
    Topsection: {
      marginVertical: 10,
      marginTop: 90,
    },
    Middlesection: {
      marginVertical: 10,
      marginTop: 50,
      paddingTop: 20,
    },
    Bottomsection: {
      marginVertical: 10,
    },
    LoginCard: {},
    fieldContainer: {
      marginVertical: 6,
    },
    FieldInput: {
      borderRadius: 50,
    },
    btn: {
      marginTop: 8,
      backgroundColor: colors.black,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.separator,
    },
    btntext: {
      textAlign: 'center',
      padding: 10,
      fontSize: 22,
      fontWeight: '500',
      color: colors.primary,
    },
    error_text: {
      color: colors.error,
      marginTop: 5,
    },
    signUP_text: {
      marginTop: 3,
      color: 'red',
    },
    white_text: {
      color: colors.primary,
    },
    alignCenter: {
      alignItems: 'center',
    },
    heading: {
      color: colors.primary,
      marginEnd: 50,
    },
    imageStyle: {
      width: '100%',
      objectFit: 'fill',
      height: 400,
      marginTop: 40,
    },
    label_text_conatiner: {
      marginHorizontal: 16,
      marginVertical: 8,
      alignItems: 'center',
    },
    loginSubtext: {
      marginTop: 8,
      color: colors.primary,
    },
  });
};

export default makeStyles;
