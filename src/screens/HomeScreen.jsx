// Corrected HomeScreen
import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ToDoList from '../components/ToDoList.jsx';
import ToDoForm from '../components/ToDoForm.jsx';
import MainLayout from '../layouts/MainLayout';


export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((_, index) => index !== id));
  };

  return (
    <MainLayout>
        <ToDoForm newTodo={newTodo} setTaskText={setNewTodo} addTask={addTodo} />
        <ToDoList todoList={todos} remove={removeTodo}/>  
        <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />          
    </MainLayout>
  );
}

