import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomAppNavigator from './src/BottomAppNavigator';
import './global.css'

const App = () => {
  return (
    <NavigationContainer>
      <BottomAppNavigator />
    </NavigationContainer>
  )
}

export default App