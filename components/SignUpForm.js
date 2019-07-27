import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

import * as firebase from "firebase";
import { stringLiteral } from "@babel/types";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",

      emailValidator: true,
      passwordValidator: true,

      signupDisabled: true, 
      errorMessage: "", 
      error: false
    };
  }

  validate(text, type) {
    
    if (type === "username") {
      //case that email is not correct format
      if (text == "") {
     
        this.setState({
          emailValidator: false,

          email: text
        });
      } else {
        this.setState({
          emailValidator: true,
          email: text
        });
      }
    }
    if (type === "password") {
      if (text.length <= 8) {
        this.setState({
          passwordValidator: false,
          password: text
        });
        
      } else {
        this.setState({
          passwordValidator: true,
          password: text
        });
        
      }
    }

    this.setState({
      signupDisabled: this.state.passwordValidator && this.state.emailValidator ? true : false
    });
  }

  CanSignUp()
  {
    if(this.state.email == "" || this.state.password == "")
    {
      return true; 
    }

    return this.signupDisabled;
  }


  signup(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch(error => {
        if(error.code == "auth/invalid-email")
        {
          this.setState({emailValidator: false, error:true, errorMessage: error.message}); 
          this.emailInput.focus(); 

        }
        else if (error.code== "auth/weak-password")
        {
          this.setState({passwordValidator: false, error:true, errorMessage: error.message}); 
          this.passwordInput.focus();
          

        }
        else if(error.code == "auth/email-already-in-use")
        {
          this.setState({emailValidator: false, error: true, errorMessage: error.message})
          this.emailInput.focus();
        }
        this.state.error = true;
        console.warn(error);
        console.warn(error.message);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        ref = {input => (this.emailInput = input)}
        placeholder={this.state.error ? this.state.errorMessage : "Username or email"}
          keyboardType="email-address"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => this.validate(text, "username")}
          onSubmitEditing={() => {
            this.passwordInput.focus();
          }}
          style={[
            styles.inputBox,
            !this.state.emailValidator ? styles.error : null
          ]}
        />

        <TextInput
          placeholder={this.state.error ? this.state.errorMessage : "Password"}
          secureTextEntry
          returnKeyType="next"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={[
            styles.inputBoxPas,
            !this.state.passwordValidator ? styles.error : null
          ]}
          onChangeText={text => this.validate(text, "password")}
          ref={input => (this.passwordInput = input)}
        />

        <TouchableOpacity style={styles.button}>
          <Button
            style={styles.button}
          
            disabled={this.CanSignUp()}
            title="Signup"
            onPress={() => this.signup(this.state.email, this.state.password)}
          >
            Signup
          </Button>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  inputBox: {
    height: 40,
    width: 300,
    backgroundColor: "rgba(255,255,255,0.3))",
    borderRadius: 25,
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 16
  },
  error: {
    borderColor: "red",
    borderWidth: 3, 
  
  },
  inputBoxPas: {
    height: 40,
    width: 300,
    backgroundColor: "rgba(255,255,255,0.3))",
    borderRadius: 25,
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 16
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 25,
    color: "#ffffff",
    marginVertical: 10,
    paddingVertical: 8
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
