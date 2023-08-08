import {createSlice} from '@reduxjs/toolkit';

interface LoaderState {
  visible: boolean;
}

const initialState: LoaderState = {
  visible: false,
};

const LoaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    SHOW: state => {
      state.visible = true;
    },
    HIDE: state => {
      state.visible = false;
    },
  },
});

export const LoaderReducer = LoaderSlice.reducer;
export const LoaderActions = LoaderSlice.actions;
