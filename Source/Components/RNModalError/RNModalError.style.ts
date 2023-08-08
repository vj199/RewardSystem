import {StyleSheet} from 'react-native';

const makeStyles = (theme: any) => {
  const {colors} = theme;
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalView: {
      backgroundColor: colors.tertiary,
      borderRadius: 8,
      padding: 24,
      width: '70%',
      shadowColor: '#000',

      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textStyle: {
      color: colors.tertiary,
      fontSize: 12,
    },
    modalText: {
      color: colors.error,
      marginVertical: 20,
    },
    buttonAlign: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      width: '100%',
    },
    imageError: {
      width: '100%',
      height: 150,
      objectFit: 'cover',
    },
  });
};

export default makeStyles;
