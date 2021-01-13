import   React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity,TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            emailID:'',
            password:'',
        }
    }
    userLogin = (username, password)=>{
      firebase.auth().signInWithEmailAndPassword(username, password)
      .then(()=>{
        return Alert.alert("You have logged in successfully!")
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      })
    }
  
    userSignUp = (username, password) =>{
      firebase.auth().createUserWithEmailAndPassword(username, password)
      .then((response)=>{
        return Alert.alert("New user has been added successfully!")
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      });
    }
    render(){
        return(
    <View style={styles.container}>
    <View style={styles.container1}>
               <Text style={styles.title}> Barter App  </Text>
               <Text style={styles.introductionText}>Welcome to the Barter app. </Text>
               <Text style={styles.introductionText}> An app designed to help you exchange  </Text>
               <Text style={styles.introductionText}> your belongings for someone else's.  </Text>
    </View>


        <View>
            
       <TextInput
              style={styles.emailTextEntry}
              placeholder="Your email"
              onChangeText= {(text)=>{
                  this.setState({
                      emailID:text
                  })
                }}
            />
          </View>



       <View>
           <TextInput
           style={styles.passwordTextEntry}
           secureTextEntry={true}
           placeholder="Your password"
           onChangeText={(text)=>{
           this.setState({
               password:text})
           }}
           />
            <View style={{alignItems:'center'}}>
            <TouchableOpacity
              style={[styles.button,{marginBottom:10}]}
              onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
              >
              <Text style={{color:'#00203FFF', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button1}
              onPress={()=>{this.userSignUp(this.state.username, this.state.password)}}
              >
              <Text style={{color:'#00203FFF', fontSize:18, fontWeight:'bold'}}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
           </View>
            </View>
           
           )}
        }
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#00203FFF",
    justifyContent:"center",
    alignItems:"center"
},
container1:{
    flex:3,
     backgroundColor:"#00203FFF",
    justifyContent:"center",
    alignItems:"center"
},
emailTextEntry:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor:'#e001ff',
    fontSize: 20,
    marginBottom:10,
    marginTop:50,
    backgroundColor:"#ADEFD1FF",
},
passwordTextEntry:{
  width: 300,
  height: 40,
  borderBottomWidth: 1.5,
  borderColor:'#e001ff',
  backgroundColor:"#ADEFD1FF",
  fontSize: 20,
  marginBottom:50,
 marginTop:0
},
title :{
    fontSize:90,
    fontWeight:'300',
    fontFamily:'AvenirNext-Heavy',
    color : '#ADEFD1FF'
  },
  button:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor:'#e001ff',
    backgroundColor:"#ADEFD1FF",
    justifyContent:'center',
    alignItems:"center",
    //marginTop:100,
  },
  button1:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor:'#e001ff',
    backgroundColor:"#ADEFD1FF",
    justifyContent:'center',
    alignItems:"center",
    //marginTop:100,
  },
  introductionText :{
    fontSize:30,
    fontWeight:'30',
    fontFamily:'AvenirNext-Heavy',
    color : '#e3e2df'
  }
})


