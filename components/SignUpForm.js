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
      signupDisabled:
        this.state.passwordValidator && this.state.emailValidator ? true : false
    });
  }

  CanSignUp() {
    if (this.state.email == "" || this.state.password == "") {
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
        if (error.code == "auth/invalid-email") {
          this.setState({
            emailValidator: false,
            error: true,
            errorMessage: error.message
          });
          this.emailInput.focus();
        } else if (error.code == "auth/weak-password") {
          this.setState({
            passwordValidator: false,
            error: true,
            errorMessage: error.message
          });
          this.passwordInput.focus();
        } else if (error.code == "auth/email-already-in-use") {
          this.setState({
            emailValidator: false,
            error: true,
            errorMessage: error.message
          });
          this.emailInput.focus();
        }
        this.state.error = true;
      });
  }
  render() {
    // const errorText = <Text> this.state.errorMessage </Text>;
    return (
      <View style={styles.container}>
        <TextInput
          ref={input => (this.emailInput = input)}
          placeholder={"Username or email"}
          keyboardType="email-address"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => this.validate(text, "username")}
          onSubmitEditing={() => {
            this.passwordInput.focus();
          }}
          style={styles.inputBox}
        />

        <TextInput
          placeholder={"Password"}
          secureTextEntry
          returnKeyType="next"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.inputBoxPas}
          onChangeText={text => this.validate(text, "password")}
          ref={input => (this.passwordInput = input)}
        />
        <View>
          <Text style={styles.error}>
            {!this.state.passwordValidator || !this.state.emailValidator
              ? this.state.errorMessage
              : ""}
          </Text>
        </View>
        <TouchableOpacity style={styles.button}
        onPress={() => this.signup(this.state.email, this.state.password)}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
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
    color: "red",
    alignSelf: "center"
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
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
