import { View, Text, StyleSheet } from "react-native";
function MealDetails({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, styles.textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, styles.textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, styles.textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    color: "#212529",
  },
});
