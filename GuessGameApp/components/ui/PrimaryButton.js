import { StyleSheet, View, Text, Pressable } from "react-native";
function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
  }
  return (
    <>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.pressed, styles.buttonInnerContainer]
              : styles.buttonInnerContainer
          }
          onPress={pressHandler}
          android_ripple={{ color: "#9c5177" }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    </>
  );
}
export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#72063c",
    elevation: 2,
    //ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 28,
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
  //iso
  pressed: {
    opacity: 0.75,
  },
});
