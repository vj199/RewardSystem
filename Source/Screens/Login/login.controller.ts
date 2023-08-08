import RootNavigation from '@navigators/RootNavigator';
import useLoginModal from './login.modal';
import { loginValidationSchema } from '@helpers/validationSchema';

const useLoginController = () => {
  const LM = useLoginModal();
  const handleLogin = async (val: any) => {
    const response = await LM.handleLogin(val);

    if (response) {
      RootNavigation.reset(0, 'TabNavigator');
    }
  };

  const handleLoginAgain = async (val: any) => {
    const response = await LM.handleLogin(val);

    if (response) {
      RootNavigation.reset(0, 'TabNavigator');
    }
  };

  const signUP = () => {
    RootNavigation.navigate('Signup');
  };

  return { handleLogin, loginValidationSchema, signUP, handleLoginAgain };
};

export default useLoginController;
