import React, {Component} from 'react'

import {
  StyleSheet, 
  Text, 
  View, 
  StatusBar
} from 'react-native'

import * as firebase from "firebase";

import Signup from './screens/Signup';

import Login from './screens/Login';

import RootNavigator from "./navigation"
import {firebaseConfig} from "./components/config"

firebase.initializeApp(firebaseConfig);
export default class App extends React.Component {

 
    render()
    {
      return <RootNavigator />
    }
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems:'center', 
    justifyContent:'center'
  },
});
