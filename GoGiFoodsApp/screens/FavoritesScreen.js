import MealsList from "../components/MealsList/MealsList";
import { ImageBackground, StyleSheet } from "react-native";
import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsCtx.ids.includes(meal.id)
  // );
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <ImageBackground
          source={require("../assets/images/star.png")}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.text}>Let's choose your favorite meal!</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#3c0d0d",
  },
});
