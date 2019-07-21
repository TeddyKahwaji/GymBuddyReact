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

export default class App extends React.Component {

  state = {
    email: '',
    password: '',
  }
  componentWillMount()
  {
    const firebaseConfig = {
      apiKey: "AIzaSyC969z_YyMij1HnvdB1c0dnnb4rusJhAzE",
      authDomain: "gymbuddyreact.firebaseapp.com",
      databaseURL: "https://gymbuddyreact.firebaseio.com",
      projectId: "gymbuddyreact",
      storageBucket: "gymbuddyreact.appspot.com",
      
    }
   
    firebase.initializeApp(firebaseConfig);
          
      
    }
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
