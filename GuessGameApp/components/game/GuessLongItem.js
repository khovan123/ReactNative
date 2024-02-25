import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function GuessLongItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLongItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#50042a",
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#ddb52f",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    //ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
