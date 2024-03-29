import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function ToDoForm({ newTodo, setNewTodo, add }) {
    return (
        <View style={styles.container}>
            <TextInput
            
                style={styles.input}
                placeholder="Add a new todo..."
                value={newTodo}
                onChangeText={setNewTodo}
            />
            <Button styles={styles.button} title="Add" onPress={add} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        display: 'flex',

        justifyContent: 'space-between',
        padding: 16,
    },
    input: {
        width: '80%', // Assuming you want a similar style
        padding: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },

    button: {
        height: 1,
    },
});
