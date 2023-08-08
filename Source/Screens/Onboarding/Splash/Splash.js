import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Splash = () => {
  const {reset} = useNavigation();
  const user = useSelector(store => store.app);
  React.useEffect(() => {
    checkForUserSession();
  });

  const checkForUserSession = () => {
    if (user?.isLogged) {
      reset({
        index: 0,
        routes: [{name: 'TabNavigator'}],
      });
    } else {
      reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }
  };

  return (
    <View>
      <Text>Helloo</Text>
    </View>
  );
};

export default Splash;
