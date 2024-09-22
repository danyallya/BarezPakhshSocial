// styles.js
import { StyleSheet } from "react-native";

const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    // padding: 10,
  },

  menuButton: {
    width: 45,
    height: 35,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    position: "absolute",
    top: 20,
    right: -25,
    zIndex: 1000,
    alignItems: "flex-end",
    justifyContent: "center",
    color: "#eee",
  },
  main: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    textAlign: "right",
    textAlignVertical: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row-reverse",
    padding: 10,
    justifyContent: "space-around",
  },
});

export default listStyles;
