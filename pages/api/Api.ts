import * as SecureStore from "expo-secure-store";
import axios, { AxiosResponse } from "axios";

const getBaseUrl = async (service: string): Promise<string> => {
  try {
    const credentials = await SecureStore.getItemAsync(service);
    if (credentials) {
      return credentials;
    }
    return "https://portalforoutsideusers.barezpakhsh.com";
  } catch (error) {
    return "https://portalforoutsideusers.barezpakhsh.com";
  }
};

export const fetchUser = async (username: string, password: string) => {
  const baseUrl = await getBaseUrl("baseUrl2");

  try {
    const response = await axios.post(`${baseUrl}/Home/LoginApi`, {
      U: username,
      p: password,
    });

    if (response.status === 500) {
      throw new Error("Internal Server Error");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchData = async () => {
  try {
    const baseUrl = await getBaseUrl("baseUrl1");
    const response = await axios.get(
      `${baseUrl}/Stock/Packaging/listpackageapi`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
