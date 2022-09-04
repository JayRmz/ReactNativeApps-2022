import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const {
    goalInputHandler,
    addGoalHandler,
    value,
    visible,
    endAddGoalHandler,
  } = props;

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputConainer}>
        <Image
          source={require("../assets/Images/goal.png")}
          style={styles.image}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your goal!"
          value={value}
        />
        <View style={styles.buttonCantainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={endAddGoalHandler}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputConainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonCantainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
