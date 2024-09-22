import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  message: string;
  type: string;
  onClose: any;
}

const AlertBox = ({ type, message, onClose }: Props) => {
  let backgroundColor;
  let iconName;

  switch (type) {
    case "success":
      backgroundColor = "#d4edda";
      iconName = "check-circle";
      break;
    case "warning":
      backgroundColor = "#fff3cd";
      iconName = "alert-circle";
      break;
    case "error":
      backgroundColor = "#f8d7da";
      iconName = "alert-octagon";
      break;
    default:
      backgroundColor = "#cce5ff";
      iconName = "information";
  }

  return (
    <View style={[styles.alertBox, { backgroundColor }]}>
      <MaterialCommunityIcons name={iconName} size={24} color="black" />
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onClose}>
        <MaterialCommunityIcons name="close" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  alertBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: "#d6d6d6",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  message: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default AlertBox;
