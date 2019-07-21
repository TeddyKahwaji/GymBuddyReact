import React, {Component} from 'react'
import {
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  KeyboardAvoidingView
} from 'react-native'

import Logo from '../Logo'
import Form from '../LoginForm'
export default class Login extends Component {
  render()
  {
    return(
      <KeyboardAvoidingView behavior="padding" style ={styles.container}>
        <Logo/>
        <Form type="Login"/>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <Text style={styles.signUpButton}> Signup</Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles= StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#455a64',
      alignItems:'center', 
      justifyContent:'center'
    },
    signupTextCont: {
      flexGrow: 1, 
      marginVertical:-30,
      paddingVertical:16,
      alignItems:'center', 
      justifyContent:'center', 
      flexDirection:'row'

    }, 
    signupText: {
      color:'rgba(255,255,255,0.6)', 
      fontSize: 16

    }, 
    signUpButton:{
      color:'#ffffff', 
      fontSize:16, 
      fontWeight:'500'
    }
  }
);