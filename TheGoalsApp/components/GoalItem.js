import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
    const { id, text, deleteGoal } = props;
    return (
        <Pressable style={styles.goalItem} key={id} onPress={deleteGoal.bind(this, id)}>
            <Text style={styles.goalItemText}>{text}</Text>
        </Pressable>
    )
};
export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',

    },
    goalItemText: {
        color: 'white'
    }
});