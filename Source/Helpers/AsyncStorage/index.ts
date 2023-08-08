import {StorageKey} from '@constants/AsyncStorageConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageUtils = {
  // AUTH TOKEN
  setAuthToken: async (token: string) => {
    try {
      await AsyncStorage.setItem(StorageKey.AUTH_TOKEN, token);
    } catch (error) {
      console.log('AUTH_TOKEN Save Error: ', error);
    }
  },
  getAuthToken: async () => {
    try {
      const value = await AsyncStorage.getItem(StorageKey.AUTH_TOKEN);
      return value;
    } catch (error) {
      console.log('AUTH_TOKEN Fetch Error: ', error);
    }
  },

  // REFRESH TOKEN
  setRefreshToken: async (token: string) => {
    try {
      await AsyncStorage.setItem(StorageKey.REFRESH_TOKEN, token);
    } catch (error) {
      console.log('REFRESH_TOKEN Save Error: ', error);
    }
  },

  getRefreshToken: async () => {
    try {
      const value = await AsyncStorage.getItem(StorageKey.REFRESH_TOKEN);
      return value;
    } catch (error) {
      console.log('REFRESH_TOKEN Fetch Error: ', error);
    }
  },
};
