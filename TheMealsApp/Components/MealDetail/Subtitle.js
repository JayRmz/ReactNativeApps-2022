import { View, Text, StyleSheet } from "react-native";
export default function Subtitle(props) {
  const { title } = props;
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}> {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
