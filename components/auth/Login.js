import React, {  useEffect, useState } from 'react'
import {View,Button,TextInput} from 'react-native';
//import firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth";
import { useDispatch } from 'react-redux';
import {login,updateId} from '../../redux/reducers/user';
import {getUserByEmail} from '../../API';

function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const loginToApp = (event) => {
        firebase.auth().signInWithEmailAndPassword(email.email, password.password)
        .then((userAuth) => {
            console.log("dispatching login");
          })
          .catch((error) => {
            console.log(error);
            console.log('user not updated');
          });
        }

        return (
            <View>
                <TextInput
                    placeholder="email"
                    onChangeText={(email) => setEmail({email})}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword({password})}
                />
                <Button
                    onPress={()=> loginToApp()}
                    title="Sign In"
                />
            </View>
        )
  }

export default Login;

