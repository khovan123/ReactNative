import { StyleSheet, View, Text } from "react-native";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: "#ddb52f",
    fontSize: 36,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
  },
});
