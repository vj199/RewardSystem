import RootNavigation from '@navigators/RootNavigator';
import useSettingModal from './setting.modal';
import { passwordValidationSchema } from '@helpers/validationSchema';

const useSettingController = () => {
    const LM = useSettingModal();
    const handleGetUser = async () => {
        await LM.handleGetUserDetail();
    };

    const changePassword = async (password: string) => {

        const response = await LM.handleChangePassword(password)
        if (response) {
            RootNavigation.navigate('Login');
        }

    }

    const handleChangePassword = () => {
        RootNavigation.navigate('Changepassword');
    }


    return { handleGetUser, passwordValidationSchema, changePassword, handleChangePassword };
};

export default useSettingController;