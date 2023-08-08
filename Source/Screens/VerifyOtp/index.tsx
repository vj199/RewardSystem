import {Alert, View} from 'react-native';
import React from 'react';
import CustomOTPInput from '@components/otpValidator';
import RootNavigation from '@navigators/RootNavigator';
import {useAppSelector} from '../../hooks/reduxHooks';

const VerifyOtp = (): JSX.Element => {
  const user = useAppSelector(state => state.app.user);

  return (
    <View style={{flex: 1}}>
      <CustomOTPInput
        numInputs={4}
        onComplete={otp => {
          if (user?.otp == otp) {
            RootNavigation.reset(0, 'TabNavigator');
          } else {
            Alert.alert('please Enter OTP as 1234');
          }
        }}
      />
    </View>
  );
};

export default VerifyOtp;
