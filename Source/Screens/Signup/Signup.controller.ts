import RootNavigation from '@navigators/RootNavigator';
import { changePasswordValidationSchema } from '@helpers/validationSchema';
import useSignupModal from './Signup.modal';

const useSignupController = () => {
  const SC = useSignupModal();
  const handleSignup = async (val: any) => {
    const response = await SC.handleChangePassword(val);
    console.log(response);

  };

  const handleLogin = () => {
    RootNavigation.navigate('Login');
  };

  return { changePasswordValidationSchema, handleSignup, handleLogin };
};

export default useSignupController;
