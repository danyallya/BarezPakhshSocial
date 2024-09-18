import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { fetchUser } from "../api/Api";
import * as SecureStore from "expo-secure-store";
import AlertBox from "../../component/AlertBox";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, type: "", message: "" });

  const handleLogin = async (username, password) => {
    if (!username || !password) {
      setAlert({
        visible: true,
        type: "error",
        message: "لطفا نام کاربری و رمز عبور را وارد کنید.",
      });
      return;
    }

    setLoading(true);

    try {
      const userData = await fetchUser(username, password);

      if (userData) {
        const businessID = userData.BusinessID;
        await SecureStore.setItemAsync(
          "businessID",
          JSON.stringify({ businessID })
        );
        navigation.navigate("List");
      } else {
        setAlert({
          visible: true,
          type: "error",
          message: "نام کاربری یا رمز عبور اشتباه است.",
        });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setAlert({
        visible: true,
        type: "warning",
        message: `مشکلی در ارتباط با سرور پیش آمده است. لطفا بعدا تلاش کنید. ${error}`,
      });
    } finally {
      setLoading(false);
    }
  };
  const handleCloseAlert = () => {
    setAlert({ visible: false, type: "", message: "" });
  };

  return (
    <Modal animationType="fade" transparent={false}>
      {alert.visible && (
        <AlertBox
          type={alert.type}
          message={alert.message}
          onClose={handleCloseAlert}
        />
      )}
      <View style={styles.container}>
        <Image source={require("../assets/logo.jpg")} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="نام کاربری"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          textContentType="username"
        />
        <TextInput
          style={styles.input}
          placeholder="رمز عبور"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="password"
        />
        <Pressable
          style={[styles.button, loading && styles.buttonLoading]}
          onPress={() => handleLogin(username, password)}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>ورود</Text>
          )}
        </Pressable>
      </View>
    </Modal>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDFFFC",
    padding: 20,
  },
  input: {
    width: "80%",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1,
    textAlign: "right",
    borderColor: "#AEAEAE",
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 65,
    borderRadius: 50,
    backgroundColor: "#CE181E",
    elevation: 3,
    marginTop: 20,
  },
  buttonLoading: {
    backgroundColor: "#0092d7",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: "30%",
    resizeMode: "contain",
    marginBottom: 20,
  },
});
