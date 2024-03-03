import {
  Pressable,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
function CategoryGridTile({ title, color, onPress, backgroud }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <ImageBackground
            style={styles.backgroud}
            source={{ uri: backgroud }}
            resizeMode="cover"
          >
            <View style={styles.innerBackground}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    //ios
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 4,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  innerBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroud: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
});
