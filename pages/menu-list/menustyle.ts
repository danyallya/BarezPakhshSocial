// styles.js
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: "#ffffff00",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: -5, height: -1 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
    marginTop: -6,
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  tile: {
    backgroundColor: "#FFF",
    padding: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#33333335",
    width: "25%",
    aspectRatio: 1,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  tileRed: {
    backgroundColor: "#d9534f",
  },
  tileBlue: {
    backgroundColor: "#5bc0de",
  },
  iconContainer: {
    marginBottom: 10,
  },
  tileText: {
    color: "#333",
    fontSize: 10,
    textAlign: "center",
  },
  tileTextRed: {
    color: "#FFF",
    fontWeight: "bold",
  },
  tileTextBlue: {
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default styles;
