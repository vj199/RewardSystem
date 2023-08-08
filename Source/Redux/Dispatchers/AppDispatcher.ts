// App wide dispatcher
import {Stores} from '../Stores/Store';
import {AppActions} from '@redux/Slices/AppSlice';

const AppDispatcher = {
  setUserLoggedIn: (data: any) => {
    Stores.dispatch(AppActions.SET_TOKEN(null));
    Stores.dispatch(AppActions.LOGIN(data));
  },
  setIsLoggedIn: (data: boolean) => {
    Stores.dispatch(AppActions.SET_IS_LOGGED_IN(data));
  },
  setUserLoggedOut: () => {
    Stores.dispatch(AppActions.LOGOUT());
  },
  updateUserTokens: (data: any) => {
    Stores.dispatch(AppActions.SET_TOKEN(data));
  },
  setErrorMessage: (data: string) => {
    Stores.dispatch(AppActions.SET_ERROR_MESSAGE(data));
  },
};

export default AppDispatcher;
