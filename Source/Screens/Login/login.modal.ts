import {FirebaseError} from '@helpers/Interfaces/interface';
import Auth from '@react-native-firebase/auth';
import AppDispatcher from '@redux/Dispatchers/AppDispatcher';

const useLoginModal = () => {
  const handleLogin = async (val: any) => {
    try {
      const resp = await Auth().signInWithEmailAndPassword(
        val.username,
        val.password,
      );
      const {email, emailVerified} = resp?.user ?? {};

      if (resp?.user) {
        AppDispatcher.setUserLoggedIn({
          email: email ?? '',
          emailVerified: emailVerified ?? '',
        });
        AppDispatcher.setIsLoggedIn(true);
        return true;
      } else {
        AppDispatcher.setUserLoggedIn({});
        AppDispatcher.setIsLoggedIn(false);
      }
    } catch (error) {
      const firebaseError = error as FirebaseError;
      AppDispatcher.setErrorMessage(firebaseError.message);
      console.log('Error message:', firebaseError.message);
    }
  };

  return {handleLogin};
};

export default useLoginModal;
