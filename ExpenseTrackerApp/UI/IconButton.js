import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ size, color, icon, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        <View style={styles.buttonContainer}>
          <Ionicons name={icon} size={size} color={color} />
        </View>
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.75,
  },
});
