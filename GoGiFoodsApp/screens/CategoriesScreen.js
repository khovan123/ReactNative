import { FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
function CategoriesScreen({ navigation }) {
  function renderCategory(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOvervies", {
        categoryId: itemData.item.id,
      });
    }
    const backgroudMeal = MEALS.find(
      (meal) => meal.categoryIds.indexOf(itemData.item.id) >= 0
    );
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        backgroud={backgroudMeal.imageUrl}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategory}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
