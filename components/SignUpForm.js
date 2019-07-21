import React, {Component} from 'react'
import {
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  TextInput, 
  TouchableOpacity, 
  Button

} from 'react-native'
import * as firebase from 'firebase';


export default class Form extends Component {
  
    render()
    {
      return(
       <View style ={styles.container}>
       
            <TextInput 
            placeholder="Username or Email"
            keyboardType="email-address"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={()=> {
                this.passwordInput.focus();
            }}
            
            style ={styles.inputBox}/>
       
       <TextInput 
            placeholder="Password"
            secureTextEntry
            returnKeyType="next"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style ={styles.inputBoxPas}
          
            ref={(input)=>this.passwordInput = input}
            onSubmitEditing={()=>this.confirmPass.focus()}
            />
         <TextInput 
            placeholder="Confirm Password"
            secureTextEntry
            returnKeyType="go"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style ={styles.inputBoxPas}
          
            ref={(input)=>this.confirmPass = input}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} 
              >Signup</Text>
            </TouchableOpacity>
        </View>
      )
    }
  }

  const styles = StyleSheet.create(
      {
        container: {
            flex: 1,
           padding: 20
          },
        inputBox: {
          
            height: 40, 
            width: 300,
            backgroundColor: 'rgba(255,255,255,0.3))',
            borderRadius: 25,
            marginBottom: 20, 
            color: '#FFF', 
            paddingHorizontal:16

        }, 
        inputBoxPas: {
          
            height: 40, 
            width: 300,
            backgroundColor: 'rgba(255,255,255,0.3))',
            borderRadius: 25,
            marginBottom: 20, 
            color: '#FFF', 
            paddingHorizontal:16,

        }, 
        button: {
            width: 300,
            backgroundColor:'#1c313a', 
            borderRadius:25,
            marginVertical:10, 
            paddingVertical:12
        },
        buttonText:{
            fontSize: 16, 
            fontWeight:'500', 
            color:'#ffffff', 
            textAlign:'center'
        }
      }
  )