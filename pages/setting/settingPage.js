import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Modal,Text
} from "react-native";
import * as SecureStore from "expo-secure-store";
import BottomMenu from "../../component/menu";

const SettingsScreen = () => {
  const [baseUrl1, setBaseUrl1] = useState("");
  const [baseUrl2, setBaseUrl2] = useState("");
  const [baseUrl3, setBaseUrl3] = useState("");


  useEffect(() => {
    const loadBaseUrls = async () => {
      try {
        const credentials1 = await SecureStore.getItemAsync("baseUrl1");
        const credentials2 = await SecureStore.getItemAsync("baseUrl2");
        const credentials3 = await SecureStore.getItemAsync("baseUrl3");

        if (credentials1) setBaseUrl1(credentials1);
        if (credentials2) setBaseUrl2(credentials2);
        if (credentials3) setBaseUrl3(credentials3);
  
      } catch (error) {
        console.error("خطا در فراخوانی آدرس ها", error);
      }
    };

    loadBaseUrls();
  }, []);

  const handleSave = async () => {
    try {
      await SecureStore.setItemAsync("baseUrl1", baseUrl1);
      await SecureStore.setItemAsync("baseUrl2", baseUrl2);
      await SecureStore.setItemAsync("baseUrl3", baseUrl3);
      Alert.alert("موفق", "آدرس های جدید با موفقیت ذخیره شد");
    } catch (error) {
      console.error("متاسفانه آدرس ها ذخیره نشد", error);
      Alert.alert("خطا", "متاسفانه آدرس ها ذخیره نشد");
    }
  };



  return (
    <Modal>
      <ScrollView>
        <View style={{ marginBottom: 20, padding: 30 }}>
          <Text
            style={{
              borderColor: "gray",
              borderWidth: 1,

              marginBottom: 20,
              padding: 10,
            }}
          >
            https://portalforoutsideusers.barezpakhsh.com
          </Text>

          <TextInput
            placeholder="آدرس لیست مشتریان"
            value={baseUrl1}
            onChangeText={setBaseUrl1}
            style={{
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 20,
              padding: 10,
            }}
          />
          <TextInput
            placeholder="آدرس ورود"
            value={baseUrl2}
            onChangeText={setBaseUrl2}
            style={{
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 20,
              padding: 10,
            }}
          />
          <TextInput
            placeholder="آدرس ارسال تراکنش ها"
            value={baseUrl3}
            onChangeText={setBaseUrl3}
            style={{
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 20,
              padding: 10,
            }}
          />
          <Button title="ذخیره " onPress={handleSave} />
        </View>
     
      </ScrollView>
      <BottomMenu componentId={1} />
    </Modal>
  );
};

export default SettingsScreen;
