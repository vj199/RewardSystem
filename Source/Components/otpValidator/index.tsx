import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import UseOtpController from './otpController';
import makeStyles from './otpValidatorStyle';
import {useTheme} from 'react-native-paper';

export interface CustomOTPInputProps {
  numInputs: number;
  onComplete: (otp: string) => void;
}

const CustomOTPInput: React.FC<CustomOTPInputProps> = props => {
  const {numInputs} = props;
  const oc = UseOtpController(props);
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.inputContainer}>
        {Array(numInputs)
          .fill(0)
          .map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={value => oc.handleChangeInput(index, value)}
              onKeyPress={({nativeEvent: {key}}) =>
                oc.handleKeyPress(index, key)
              }
              ref={ref => (oc.inputRefs.current[index] = ref!)}
            />
          ))}
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          [
            numInputs != oc.otp.length && {
              backgroundColor: '#C4C4C4',
            },
          ],
        ]}
        disabled={numInputs != oc.otp.length}
        onPress={oc.handleComplete}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomOTPInput;
