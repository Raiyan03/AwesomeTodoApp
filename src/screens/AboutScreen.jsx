import React from 'react';
import { Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const date = new Date();
  
  return (
    <MainLayout>
      <Text>Awesome Todo App</Text>
      <Text>{date.toDateString()}</Text>
      <Text>Developed by: Raiyan Anwar</Text>
    </MainLayout>
  );
}

export default AboutScreen;
