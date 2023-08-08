import {FirebaseError} from '@helpers/Interfaces/interface';
import Auth from '@react-native-firebase/auth';
import AppDispatcher from '@redux/Dispatchers/AppDispatcher';

const useSignupModal = () => {
  const handleChangePassword = async (val: any) => {
    try {
      await Auth().sendPasswordResetEmail(val.email);
      // if (resp) {
      //     return true;
      // }
    } catch (error) {
      const firebaseError = error as FirebaseError;
      AppDispatcher.setErrorMessage(firebaseError.message);
      console.log('Error message:', firebaseError.message);
    }
  };

  return {handleChangePassword};
};

export default useSignupModal;
