import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOVer] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOVer(false);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber)
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );

  if (gameIsOver && userNumber) screen = <GameOverScreen />;

  function gameOverHandler() {
    setGameIsOVer(true);
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backImage: {
    opacity: 0.25,
  },
});
