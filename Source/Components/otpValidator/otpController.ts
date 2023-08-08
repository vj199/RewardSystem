import {useRef, useState} from 'react';
import {CustomOTPInputProps} from '.';
import {TextInput} from 'react-native';

const UseOtpController = (props: CustomOTPInputProps) => {
  const {numInputs, onComplete} = props;

  const [otp, setOTP] = useState<string>('');
  const inputRefs = useRef<TextInput[]>([]);

  const handleChangeInput = (index: number, value: string) => {
    const updatedOTP = otp.split('');
    updatedOTP[index] = value;
    setOTP(updatedOTP.join(''));

    // Focus on the next input
    if (value && index < numInputs - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      // Focus on the previous input when backspace is pressed and the current input is empty
      inputRefs.current[index - 1].focus();
    }
  };

  const handleComplete = () => {
    onComplete(otp);
  };

  return {
    otp,
    inputRefs,
    handleChangeInput,
    handleKeyPress,
    handleComplete,
  };
};

export default UseOtpController;
