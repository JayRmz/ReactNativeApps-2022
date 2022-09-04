import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  const { id, text, deleteGoal } = props;
  return (
    <View style={styles.goalItem}>
      <Pressable
        key={id}
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
