import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import SideMenu from "../../component/SideMenu";
import BottomMenu from "../../component/menu";
import listStyles from "./listStyles";

const ListScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  const loadDataFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem("apiData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error loading data from storage:", error);
      setLoading(false);
    }
  };

  return (
    <Modal>
      <View style={listStyles.container}>
        <TouchableOpacity
          style={listStyles.menuButton}
          onPress={() => setIsMenuVisible(true)}
        >
          <MaterialCommunityIcons
            name="microsoft-xbox-controller-menu"
            size={30}
            color="#adbced"
          />
        </TouchableOpacity>
        <View style={listStyles.main}>
          <Text>تست</Text>
        </View>
        <SideMenu
          isVisible={isMenuVisible}
          onClose={() => setIsMenuVisible(false)}
          profileImage="../../assets/profile.jpg"
        />
        <BottomMenu />
      </View>
    </Modal>
  );
};

export default ListScreen;
