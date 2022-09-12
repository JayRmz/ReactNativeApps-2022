import { FlatList, Text, View, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

export default function ExpensesList(props) {
  const { expenses } = props;
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
