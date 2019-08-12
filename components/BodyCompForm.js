import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import Logo from "../components/Logo";
import Form from "../components/LoginForm";
import { Dropdown } from "react-native-material-dropdown";




export default class BodyCompForm extends Component {
  state = {
    heightFt: null,
    heightin: null,
    weight: null,
    ProgramPreference: null,
    initialClick: null
  };
 
  Verify= () => 
  {
    
     this.setState({initialClick:1})
     
  }
  CanContinue = () => {
    
    return (
      this.state.heightFt != null &&
      this.state.heightin != null &&
      this.state.weight != null &&
      this.state.ProgramPreference != null
    );
  };

  render() {
    let data = [
      {
        value: "4"
      },
      {
        value: "5"
      },
      {
        value: "6"
      },
      {
        value: "7"
      }
    ];
    let inches = [
      {
        value: "1"
      },
      {
        value: "2"
      },
      {
        value: "3"
      },

      {
        value: "4"
      },
      {
        value: "5"
      },
      {
        value: "6"
      },
      {
        value: "7"
      },
      {
        value: "8"
      },
      {
        value: "9"
      },
      {
        value: "10"
      },
      {
        value: "11"
      }
    ];

    const errorText = (
      <Text style={styles.error}>
        {!this.CanContinue && this.state.initialClick != null
          ? "Please ensure all fields have been inputed"
          : ""}
      </Text>
    );

    let radio_props = [
      { label: "BodyBuilding", value: 0 },
      { label: "Powerlifting", value: 1 },
      { label: "Hybrid", value: 2 }
    ];
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View>
          <Text
            style={{
              marginLeft: 150,
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              alignContent: "center",
              fontWeight: "bold",
              marginBottom: 30
            }}
          >
            Metric Form
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ alignContent: "center", marginLeft: 10 }}>
            <Text
              style={{
                marginTop: 38,
                fontSize: 18,
                color: "rgba(255,255,255,0.7)",
                fontWeight: "bold"
              }}
            >
              Height:
            </Text>
          </View>

          <View style={{ marginLeft: 30, width: 10 }}>
            <Dropdown
              baseColor="rgba(255,255,255,0.7)"
              containerStyle={{ width: 120, alignContent: "center" }}
              label="Height (Feet)"
              onChangeText={value => this.setState({ heightFt: value })}
              data={data}
            />
          </View>
          <View style={{ width: 10, marginLeft: 120 }}>
            <Dropdown
              baseColor="rgba(255,255,255,0.7)"
              containerStyle={{ width: 130, alignContent: "center" }}
              label="Height (inches)"
              onChangeText={value => this.setState({ heightin: value })}
              data={inches}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <View style={{ alignContent: "center", marginLeft: 10 }}>
            <Text
              style={{
                marginTop: 38,
                fontSize: 18,
                color: "rgba(255,255,255,0.7)",
                fontWeight: "bold"
              }}
            >
              Weight:
            </Text>
          </View>
          <View style={{ marginLeft: 30, width: 10 }}>
            <TextInput
              returnKeyType="done"
              maxLength={3}
              placeholder="Enter Weight"
              keyboardType="number-pad"
              style={styles.textinput}
              onChangeText={weightInput =>
                this.setState({ weight: weightInput })
              }
            />
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ alignContent: "center", marginLeft: 10 }}>
            <Text
              style={{
                marginTop: 38,
                fontSize: 18,
                color: "rgba(255,255,255,0.7)",
                fontWeight: "bold"
              }}
            >
              Program Preference:
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <RadioForm
              formHorizontal={true}
              labelColor={"rgba(255,255,255,0.7)"}
              radio_props={radio_props}
              animation={true}
              buttonInnerColor={"white"}
              onPress={value => this.setState({ ProgramPreference: value })}
            />
          </View>
          <View
            style={{ alignContent: "center", marginLeft: 45, marginTop: 45 }}
          >
            <View
              style={{
                marginLeft: 10,
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              
            </View>
           
           
          </View>
          
        </View>

        <View style={{alignContent: "center", marginLeft: 45, marginTop: 15 }}> 
     
        <TouchableOpacity
              style={styles.button}
             onPress={this.Verify}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            {errorText}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    height: 35,
    width: 150,
    backgroundColor: "rgba(255,255,255,0.3))",
    borderRadius: 25,
    marginTop: 25,
    marginRight: 100,
    paddingHorizontal: 20,
    color: "#FFF"
  },
  error: {
    color: "red"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },
  container: {
    backgroundColor: "#455a64",
    flex: 1
  },
  logo: {
    marginVertical: 120
  },
  Dropdown: {
    marginTop: 50,
    marginLeft: 80
  }
});
