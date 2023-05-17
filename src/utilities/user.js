import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem(user._id, JSON.stringify(user));
  } catch (e) {
    console.log("problem saving user", e);
  }
};

export const getUser = async (userId) => {
  try {
    const user = await AsyncStorage.getItem(userId);
    return user;
  } catch (e) {
    console.log("problem fetching user ", e);
  }
};
