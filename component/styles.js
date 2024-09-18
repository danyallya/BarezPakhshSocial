// styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    height: 65,
    backgroundColor: "#f5333c",
    marginBottom:10,
    marginHorizontal:10,
    borderRadius:50,
  },
  tochable: {
    flexGrow: 1,
    alignItems: "center",
  },
});

export default styles;
