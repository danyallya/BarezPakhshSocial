// styles.js
import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDFFFC",
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
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 65,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#CE181E",
  },
  texta: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  image: {
    position: "absolute",
    top: "10%",
    width: "100%",
    height: "30%",
    resizeMode: "cover",
    opacity: 0.2,
  },
  buttonLoading: {
    backgroundColor: "#0092d7", // رنگ آبی هنگام بارگذاری
  },
});

export default loginStyles;
