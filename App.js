import React, { useState } from 'react';
import { View } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { StyleSheet } from 'react-native';
export default function App() {
  const [todos, setTodos] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos,  newTodo ]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <View style={styles.container}>
      <ToDoForm newTodo={newTodo} setTaskText={setNewTodo} addTask={addTodo} />
      <ToDoList todoList={todos} remove={removeTodo} />
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
});