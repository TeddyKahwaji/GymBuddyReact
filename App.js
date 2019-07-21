import React, {Component} from 'react'
import {
  StyleSheet, 
  Text, 
  View, 
  StatusBar
} from 'react-native'


import AppNavigator from './navigation/AppNavigator';
import Signup from './components/Pages/Signup';
import {createStackNavigator} from 'react-navigation'
import Login from './components/Pages/Login';

export default class App extends Component {
  render()
  {
    return(
      <Signup/>
    
    )
  }
}

const AppStackNavigator = createStackNavigator({
  Login:Login
  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems:'center', 
    justifyContent:'center'
  },
});
