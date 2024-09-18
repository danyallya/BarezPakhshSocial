import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./pages/login/loginscreen";
import ListScreen from "./pages/list-customer/listscreen";
import MenuScreen from "./pages/menu-list/menuscreen";
import SettingsScreen from "./pages/setting/settingPage";
const Stack = createNativeStackNavigator();

export default function App() {
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
