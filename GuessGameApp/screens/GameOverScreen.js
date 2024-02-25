import { StyleSheet, View, Text, Image } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen({ userNumber, rounds, onRestart }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <View>
        <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}
export default GameOverScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 64,
  },
  imageContainer: {
    width: 320,
    height: 320,
    borderRadius: 250,
    borderWidth: 3,
    borderColor: "#50042a",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: "#72063c",
    fontFamily: "open-sans-bold",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 24,
    marginBottom: 24,
  },
});
