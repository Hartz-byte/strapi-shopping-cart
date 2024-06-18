import { AUTH_TOKEN } from "./constant";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  // return localStorage.getItem(AUTH_TOKEN);
  try {
    const token = await AsyncStorage.getItem(AUTH_TOKEN);
    return token;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const setToken = async (token) => {
  if (token) {
    // localStorage.setItem(AUTH_TOKEN, token);
    try {
      const token = await AsyncStorage.setItem(AUTH_TOKEN, token);
    } catch (err) {
      console.error(err);
    }
  }
};

export const removeToken = async () => {
  // localStorage.removeItem(AUTH_TOKEN);
  try {
    const token = await AsyncStorage.removeItem(AUTH_TOKEN);
  } catch (err) {
    console.error(err);
  }
};
