import {createSlice} from '@reduxjs/toolkit';

type userType = {
  otp?: string;
  refresh?: string;
  token?: string;
};
interface AppState {
  user: userType;
  authToken: null | string;
  isLogged: boolean;
  error: {
    errorMessage?: string;
    errorCode?: string | number;
  };
}

const initialState: AppState = {
  user: {},
  authToken: null,
  isLogged: false,
  error: {
    errorMessage: '',
    errorCode: '',
  },
};

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload;
    },
    SET_IS_LOGGED_IN: (state, action) => {
      state.isLogged = action.payload;
    },
    LOGOUT: state => {
      state.isLogged = false;
      state.authToken = null;
    },
    SET_TOKEN: (state, action) => {
      state.authToken = action.payload;
    },
    SET_ERROR_MESSAGE: (state, action) => {
      state.error.errorMessage = action.payload;
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const AppActions = AppSlice.actions;
