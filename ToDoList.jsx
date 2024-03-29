import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ToDoList(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Todo App</Text>
      {
        props.todoList.map((item, index) => (
          <View key={index} style={styles.todo}>
            <Text>{item}</Text>
            <Button title="Remove" onPress={() => props.remove(index)} />
          </View>
        ))
      }
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
  todo: {
    
  },
});
