import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import firebase from "firebase/app";
import "firebase/auth"
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'
import AddScreen from './components/main/Add'
import SaveScreen from './components/main/Save'
import CreatePostScreen from './components/main/CreatePost'
import { login, logout, selectUser,updateId,updateInterest,updateFriend,loadFriends } from './redux/reducers/user';
import {getUserByEmail,getUserInterests,getFriends} from './API';

//import firebaseConfig from './App'




const firebaseConfig = {
    apiKey: "AIzaSyDrOQDj1eIgMDMrbYCh0VwgexFNJ-GtezY",
    authDomain: "takemeout-4329b.firebaseapp.com",
    projectId: "takemeout-4329b",
    storageBucket: "takemeout-4329b.appspot.com",
    messagingSenderId: "1022034358793",
    appId: "1:1022034358793:web:cf50ba54b73c7aff5ffed8",
    measurementId: "G-5YFV74KLYH"
  };
  
if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
  }
  
function Index(){
    const user = useSelector(selectUser);
    console.log("      USER    =>     ",user);
    const dispatch = useDispatch();
    const Stack = createStackNavigator();
    var userID=0; 
    
    useEffect((userID) => {
      firebase.auth().onAuthStateChanged((userAuth) => {
        console.log('userAuth=',userAuth);
        console.log('user=',user);
        if (userAuth) {
          dispatch(
            login({
              email: userAuth.email,
            })
          );
          //console.log('Index => email=',userAuth.email); 
          getUserByEmail(userAuth.email).then((response) => {
            userID=response.data;
            console.log('response: ',response.data);
            console.log('response ID: ',userID);
            dispatch(
              updateId({
                user_id: response.data,
          }))
          return userID;
          }).then(userID=>
            getUserInterests(userID).then((response)=>{
              console.log('user interests response: ',response);
              dispatch(
                updateInterest({
                  interest: response,
              }))
              return userID;
            })
          ).then(userID=>
            getFriends(userID).then((response)=>{
              console.log('user friends response: ',response);
              dispatch(
                loadFriends({
                  friend: response,
              }))
            })
          )
          console.log("user id to be sent to getuserInterest: ",user);
          console.log('Index => userID=',userID);  
          console.log('user after dispatch=',user);
        }else{
          dispatch(logout());
        }
      });
    },[]);
      if(!user){
        console.log('user inside log in =',user);
        return (
          <NavigationContainer>
            <Stack.Navigator initialRoutName="Landing">
              <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:false}}></Stack.Screen>
              <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
              <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
              {/* <Stack.Screen name="Post" component={PostScreen} ></Stack.Screen> */}
  
            </Stack.Navigator>
          </NavigationContainer>
        );
      }else{
      console.log('user inside feed =',user);

      return(
            
          <NavigationContainer>
            <Stack.Navigator initialRoutName="Main">
              <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}></Stack.Screen>
              <Stack.Screen name="Add" component={AddScreen} ></Stack.Screen> 
              <Stack.Screen name="Save" component={SaveScreen}></Stack.Screen>
              <Stack.Screen name="CreatPost" component={CreatePostScreen}></Stack.Screen>
            </Stack.Navigator>  
          </NavigationContainer>
     );
      }
}
export default Index;