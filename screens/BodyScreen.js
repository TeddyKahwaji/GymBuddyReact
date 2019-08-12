import React, { Component } from "react";
import firebase from "firebase";
import BodyCompForm from "../components/BodyCompForm"
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";



export default class BodyScreen extends Component {
  
  
  

  render() {
    return (
    <View style={styles.container}> 
        <BodyCompForm/>
     
      </View>
    
    );

    
      
      
    
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#455a64",
      flex:1,
    
  },
  Text: {
    alignContent:"center", 
   
    fontSize: 40, 

  }
});
