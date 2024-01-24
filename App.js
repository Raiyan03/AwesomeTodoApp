import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Learn React Native' },
    { id: '2', text: 'Build a Todo App' },
    { id: '3', text: 'Deploy React Native App' },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Todo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo..."
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
      />
      <Button title="Add" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <Text>{item.text}</Text>
            <Button title="Remove" onPress={() => removeTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '80%',
  },
});
