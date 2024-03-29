import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function ToDoForm({ newTodo, setTaskText, addTask }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                value={newTodo}
                onChangeText={setTaskText}
            />
            <Button title="Add task" onPress={addTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        justifyContent: 'space-between',
        padding: 16,
    },
    input: {
        width: '80%', 
        padding: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
});
