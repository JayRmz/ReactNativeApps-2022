import { TextInput, Button, StyleSheet, View } from 'react-native'
function GoalInput(props) {
    const { goalInputHandler, addGoalHandler, value } = props;
    return (
        <View style={styles.inputConainer}>
            <TextInput
                onChangeText={goalInputHandler}
                style={styles.textInput}
                placeholder='Your goal!'
                value={value}
            />
            <Button
                title='Add Goal'
                onPress={addGoalHandler}
            />
        </View>
    )
}
export default GoalInput;

const styles = StyleSheet.create({
    inputConainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },

});