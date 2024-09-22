import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./menustyle";

const MenuScreen = () => {
  const navigation = useNavigation();

  const menuItems = [
    { title: "بارکد اجناس", route: "", icon: "barcode-scan", type: "blue" },
    {
      title: "لیست اجناس اسکن شده",
      route: "",
      icon: "check-circle",
      type: "default",
    },
    {
      title: "لیست اجناس مشتریان",
      route: "List",
      icon: "account-group",
      type: "red",
    },
    { title: "آیتم 4", route: "", icon: "archive", type: "default" },
    { title: "آیتم 5", route: "", icon: "box", type: "default" },
    { title: "آیتم 6", route: "", icon: "cart", type: "default" },
    { title: "خروج", route: "Login", icon: "logout", type: "red" },
    { title: "آیتم 8", route: "", icon: "credit-card", type: "default" },
  ];

  return (
    <Modal animationType="slide" transparent={false}>
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <Image
            source={require("../../assets/banner.jpg")}
            style={styles.bannerImage}
          />
        </View>

        <View style={styles.bottomHalf}>
          <View style={styles.grid}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tile,
                  item.type === "red" && styles.tileRed,
                  item.type === "blue" && styles.tileBlue,
                ]}
                onPress={() => navigation.navigate(item.route as never)}
                activeOpacity={0.7}
              >
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name={item.icon as any}
                    color={item.type === "default" ? "#333" : "#fff"}
                    size={30}
                  />
                </View>
                <Text
                  style={[
                    styles.tileText,
                    item.type === "red" && styles.tileTextRed,
                    item.type === "blue" && styles.tileTextBlue,
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MenuScreen;
