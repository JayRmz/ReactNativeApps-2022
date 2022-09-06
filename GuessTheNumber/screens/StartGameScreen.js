import { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constants/Colors";

function StartGameScreen(props) {
  const { onPickedNumber } = props;

  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHanlder(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmInputHanlder() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }

    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHanlder}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton> Reset </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHanlder}>
              {" "}
              Confirm{" "}
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
