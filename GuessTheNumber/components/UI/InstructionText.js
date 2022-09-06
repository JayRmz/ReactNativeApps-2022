import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructions, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  instructions: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
