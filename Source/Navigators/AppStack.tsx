// All stack navigator of the app
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './Routes/Routes';
import {useTheme} from 'react-native-paper';
import {NavigationPaths} from './Constants';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/Stores/Store';

const Stack = createNativeStackNavigator();

export const AppStacks = (): JSX.Element => {
  const {colors} = useTheme();
  const isLoggedIn = useSelector((store: RootState) => store?.app.isLogged);
  useEffect(() => {}, [isLoggedIn]);
  return (
    <Stack.Navigator
      initialRouteName={NavigationPaths.SPLASH}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors.primary,
        },
        // headerStyle: {
        //   shadowOpacity: 0,
        // },
        // headerTitleStyle: {
        //   alignSelf: 'center',
        //   color: colors.primary,
        //   fontWeight: '400',
        // },
      }}>
      {Routes.map(({name, component, options}) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
};
