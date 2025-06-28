import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomAppNavigator from './src/BottomAppNavigator';
import './global.css'
import { Provider } from 'react-redux';
import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomAppNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App