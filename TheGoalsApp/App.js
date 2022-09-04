import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText)
  };

  function addGoalHandler() {
    setGoalList(() => [
      ...goalList,
      { text: enteredGoal, id: Math.random().toString() }
    ]);
    setEnteredGoal('');
  };

  function deleteGoalHandler(id) {
    console.log('delete')
    setGoalList(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput value={enteredGoal} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={goalList} renderItem={itemData => {
          const { item } = itemData
          const { text, id } = item
          return <GoalItem id={id} text={text} deleteGoal={deleteGoalHandler} />
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  },


});
