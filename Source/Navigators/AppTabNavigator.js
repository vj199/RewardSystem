import React from 'react';
import Dashboard from '@screens/UserDashboard';
import Profile from '@screens/Profile/Index';
import Settings from '@screens/Settings/Index';
import {CurvedBottomBarExpo} from 'react-native-curved-bottom-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import Theme from '../Themes/DefaultTheme';
import VerifyOtp from '@screens/VerifyOtp';

const _renderIcon = (routeName, selectedTab) => {
  let icon = '';

  switch (routeName) {
    case 'Verifyotp':
      icon = 'home';
      break;
    case 'Profile':
      icon = 'credit-card';
      break;
    case 'Home':
      icon = 'bank';
      break;
    case 'Settings':
      icon = 'user';
      break;
  }

  return (
    <Icon
      name={icon}
      size={20}
      color={routeName === selectedTab ? 'black' : 'gray'}
    />
  );
};

const renderTabBar = ({routeName, selectedTab, navigate}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={styles.tabbarItem}>
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );
};

const AppTabNavigator = () => {
  const theme = useTheme();
  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={60}
      circleWidth={100}
      bgColor={theme.colors.text}
      circlePosition="center"
      initialRouteName="Verifyotp"
      borderTopLeftRight
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity style={styles.button}>
            <Icon name={'gift'} color={theme.colors.text} size={20} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBarExpo.Screen
        name="Verifyotp"
        position="LEFT"
        component={VerifyOtp}
      />
      <CurvedBottomBarExpo.Screen
        name="Home"
        position="LEFT"
        component={Dashboard}
      />
      <CurvedBottomBarExpo.Screen
        name="Profile"
        component={Profile}
        position="RIGHT"
      />
      <CurvedBottomBarExpo.Screen
        name="Settings"
        component={Settings}
        position="RIGHT"
      />
    </CurvedBottomBarExpo.Navigator>
  );
};

export default AppTabNavigator;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.secondary,
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
});
