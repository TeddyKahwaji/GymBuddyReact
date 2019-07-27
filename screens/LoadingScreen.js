import React, { Component } from "react";
import firebase from "firebase";
import LoadingScreen from "../components/LoadingScreenAnimation";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";


export default class App extends Component {
  
  componentDidUpdate()
  {
   this.checkIfLoggedIn();

   
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("Login");
        console.warn("it got here");
      } else {
        this.props.navigation.navigate("Signup");
        console.warn("did not detect user login");
      }
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <LoadingScreen
          style={styles.image}
          source={require("../assets/images/logo.png")}
        />
        
      </View>
      
    );

    
      
      
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#455a64",
    justifyContent: "center"
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10
  }
});
