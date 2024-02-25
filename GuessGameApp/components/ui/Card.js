import { View, StyleSheet } from "react-native";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#50042a",
    //showdow for android
    elevation: 8,
    // shadow for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
