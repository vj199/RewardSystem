import { FirebaseError } from '@helpers/Interfaces/interface';
import Auth from '@react-native-firebase/auth';
import AppDispatcher from '@redux/Dispatchers/AppDispatcher';


const useSettingModal = () => {


    const handleGetUserDetail = async () => {
        try {
            Auth().currentUser?.uid;
        } catch (error) {
            const firebaseError = error as FirebaseError;
            AppDispatcher.setErrorMessage(firebaseError.message);
            console.log('Error message:', firebaseError.message);
        }
        return true
    }

    const handleChangePassword = async (password: string) => {
        try {
            console.log(password);
            Auth().currentUser?.updatePassword(password)
            return true

        } catch (error) {
            const firebaseError = error as FirebaseError;
            AppDispatcher.setErrorMessage(firebaseError.message);
            console.log('Error message:', firebaseError.message);
            return false
        }
    }

    return { handleGetUserDetail, handleChangePassword };
};

export default useSettingModal;
