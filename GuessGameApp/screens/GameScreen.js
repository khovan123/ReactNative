import { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, View, Text, FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLongItem from "../components/game/GuessLongItem";
function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
  // const inititalNumber = useMemo(() => {
  //   generateRandomBetween(minBoundary, maxBoundary, userNumber);
  // }, [userNumber]);
  const inititalNumber = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(inititalNumber);
  const [guessRound, setGuessRound] = useState([inititalNumber]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Do not lie!", "You know it wrong...:(((", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRound((preGuessRounds) => [newRandomNumber, ...preGuessRounds]);
  }
  const lengthGuessRound = guessRound.length;
  return (
    <>
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.instructionText}>
            Higher or Lower?
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Entypo name="minus" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Entypo name="plus" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.listContainer}>
          {/* {guessRound.map((round) => (
            <Text key={round}>{round}</Text>
          ))} */}

          <FlatList
            data={guessRound}
            renderItem={(itemData) => (
              <GuessLongItem
                roundNumber={lengthGuessRound - itemData.index}
                guess={itemData.item}
              ></GuessLongItem>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 32,
    paddingVertical: 64,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
