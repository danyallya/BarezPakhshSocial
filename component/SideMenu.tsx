import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

interface Props {
  isVisible: boolean;
  profileImage: any;
  onClose: any;
}

const SideMenu = ({ isVisible, onClose, profileImage }: Props) => {
  const [slideAnim] = useState(new Animated.Value(width));

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? width / 2 : width,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isVisible]);

  const menuItems = [
    { icon: "👤", text: "صفحه پروفایل", screen: "Profile" },
    { icon: "📄", text: "صفحه فاکتورهای من", screen: "Invoices" },
    { icon: "📝", text: "صفحه درخواست‌های من", screen: "Requests" },
    { icon: "🛍️", text: "لیست محصولات", screen: "Products" },
    { icon: "🔥", text: "لیست پیشنهادات روز", screen: "Offers" },
  ];

  return (
    <Animated.View style={[styles.menuContainer, { right: slideAnim }]}>
      <View style={styles.topBox}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <MaterialCommunityIcons name={"close"} size={15} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.profileImage}
        />
      </View>
      <ScrollView contentContainerStyle={styles.menuContent}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuItemIcon}>{item.icon}</Text>
            <Text style={styles.menuItemText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width / 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 0 },
    shadowRadius: 10,
    elevation: 5,
    zIndex: 999,
  },
  topBox: {
    height: height / 6,
    backgroundColor: "#d91015",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 0,
  },
  closeButton: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 10,
    right: 0,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -65,
    zIndex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    resizeMode: "cover",
    borderColor: "#fff",
  },
  menuContent: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  menuItemIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default SideMenu;
