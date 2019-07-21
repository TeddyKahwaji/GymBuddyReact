import React, {Component} from 'react'
import {
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  Image
} from 'react-native'

import Form from './LoginForm'

export default class Logo extends Component {
    render()
    {
      return(
       <View style ={styles.container}>
         <Image style ={{width: 150, height:180}}
         source= {require('../assets/images/logo.png')}/>
         <Text style={styles.logoText}>Revolutionize Your Workout</Text>
         
        </View>
      )
    }
  }

  const styles = StyleSheet.create(
      {
        container: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
          },
          logoText:{
              marginVertical:-30,
              fontSize:18, 
              color:'rgba(255,255,255,0.7)'
          }
      }
  )