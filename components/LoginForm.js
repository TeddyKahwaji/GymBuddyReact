import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity
} from "react-native";

import { LoadingScreen } from "../screens/LoadingScreen";
import * as firebase from "firebase";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",

      emailValidator: true,
      passwordValidator: true,

      loginDisabled: true,
      errorMessage: "",
      error: false
    };
  }

  validate(text, type) {
    if (type == "email") {
      this.setState({ email: text });
    } else if (type == "password") {
      this.setState({ password: text });
    }
  }

  SignIn(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("LoadingScreen");
      })
      .catch(error => {
        if (error.code == "auth/wrong-password") {
          this.setState({
            passwordValidator: false,
            errorMessage: error.message
          });
          this.passwordInput.focus();
        }
        if (error.code == "auth/invalid-email") {
          this.setState({ emailValidator: false, errorMessage: error.message });
          this.emailInput.focus();
        }
      });
  }
  render() {
    const errorText = (
      <Text style={styles.error}>
        {!this.state.emailValidator || !this.state.passwordValidator
          ? this.state.errorMessage
          : ""}
      </Text>
    );
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username or Email"
          keyboardType="email-address"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          ref={input => (this.emailInput = input)}
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(text, type) => this.validate(text, "email")}
          style={styles.inputBox}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          returnKeyType="go"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.inputBoxPas}
          onChangeText={(text, type) => this.validate(text, "password")}
          ref={input => (this.passwordInput = input)}
        />
        <View>{errorText}</View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.SignIn(this.state.email, this.state.password)}
        >
          <Text style={styles.buttonText}>{this.props.type}</Text>
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
  inputBoxPas: {
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
