import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

const BottomMenu = () => {
  const navigation = useNavigation();

  const adminId = [
    { BusinessID: 489 },
    { BusinessID: 8925 },
    { BusinessID: 14470 },
  ];

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const storedBusinessID = await SecureStore.getItemAsync("businessID");
      if (storedBusinessID) {
        const { businessID } = JSON.parse(storedBusinessID);
        const isAdmin = adminId.some(
          (admin) => admin.BusinessID === businessID
        );
        setIsAdmin(isAdmin);
      }
    };

    checkAdminStatus();
  }, []);

  const navigateToScreen = (screenName) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: screenName }],
      })
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen("Login")}
      >
        <MaterialCommunityIcons name="logout" size={24} color="black" />
        <Text style={styles.buttonText}>خروج</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen("List")}
      >
        <MaterialCommunityIcons name="playlist-minus" size={24} color="black" />
        <Text style={styles.buttonText}>لیست</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen("Menu")}
      >
        <MaterialCommunityIcons name="menu-open" size={24} color="black" />
        <Text style={styles.buttonText}>منو</Text>
      </TouchableOpacity>

      {isAdmin && (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToScreen("Settings")}
          >
            <MaterialCommunityIcons
              name="wifi-settings"
              size={24}
              color="black"
            />
            <Text style={styles.buttonText}>تنظیمات</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fafafa",
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 5,
  },
  button: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    marginTop: 2,
  },
});

export default BottomMenu;
