import {StyleSheet} from 'react-native';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';

const makeStyles = (theme: ThemeProp) => {
  const {colors} = theme;
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 50,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginHorizontal: 6,
      fontSize: 16,
      width: 50,
      textAlign: 'center',
    },
    button: {
      marginTop: 20,
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
};

export default makeStyles;
