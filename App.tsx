import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListScreen from "./pages/list-customer/listscreen";
import SettingsScreen from "./pages/setting/settingPage";
import messaging from "@react-native-firebase/messaging";
import MenuScreen from "./pages/menu-list/menuscreen";
import LoginScreen from "./pages/login/loginscreen";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  }

  async function getToken() {
    const token = await messaging().getToken();
    console.log(token);
  }

  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
