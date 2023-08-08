import {View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import ButtonPaper from '@components/Button/button';
import AppDispatcher from '@redux/Dispatchers/AppDispatcher';
// import {useSelector} from 'react-redux';
// import {RootState} from '@redux/Stores/Store';
import RootNavigation from '@navigators/RootNavigator';
import makeStyles from './setting.style';
import {useTheme, Text} from 'react-native-paper';
import useSettingController from './setting.controller';

const Settings = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  // const user = useSelector((store: RootState) => store?.app);
  // console.log('user', user);

  const sc = useSettingController();

  function handleLogout() {
    RootNavigation.navigate('Login');
    AppDispatcher.setUserLoggedOut();
    AppDispatcher.setUserLoggedIn({});
  }

  useEffect(() => {
    sc.handleGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.settingConatiner}>
      <View style={styles.subSettings}>
        <Text>Profile Details</Text>
      </View>

      <TouchableOpacity
        style={styles.subSettings}
        onPress={sc.handleChangePassword}>
        <Text>Change Password</Text>
      </TouchableOpacity>

      <View style={styles.subSettings}>
        <Text>Praise Summary</Text>
      </View>

      <View style={styles.subSettings}>
        <Text>Credit Summary</Text>
      </View>

      <View style={styles.logoutBtn}>
        <ButtonPaper onPress={handleLogout}>Logout</ButtonPaper>
      </View>
    </View>
  );
};

export default Settings;
