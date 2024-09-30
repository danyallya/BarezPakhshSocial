import { View, Image, Text } from "react-native";
import { Props } from "./type";
import styles from "./styles";

export default function Profile(props: Props) {
  return (
    <View style={styles.profile}>
      <View>
        <Image source={require("../assets/profile.jpg")} alt="prfile" />
        <Text>{props.Name}</Text>
      </View>
      <View style={styles.hr}></View>
      <View>
        <Text>آدرس</Text>
        <Text>کرمان - خیابان خواجو نبش کوچه 27 فروشگاه اکبري</Text>
        <View style={styles.group}>
          <Text>شماره همراه</Text>
          <Text>3222546</Text>
          <Text>شماره تلفن</Text>
          <Text>3222546</Text>
        </View>
        <View style={styles.group}>
          <Text>شماره همراه</Text>
          <Text>3222546</Text>
          <Text>شماره تلفن</Text>
          <Text>3222546</Text>
        </View>
        <Text>آدرس</Text>
        <Text>کرمان - خیابان خواجو نبش کوچه 27 فروشگاه اکبري</Text>
      </View>
    </View>
  );
}
