import React, {  useEffect, useState } from 'react'
import {View,Button,TextInput} from 'react-native';
//import firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth";
import { useDispatch } from 'react-redux';
import {login,updateId} from '../../redux/reducers/user';
import {getUserByEmail} from '../../API';

function Login() {
    const dispatch = useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const loginToApp = (event) => {
        //console.log(userAuth.user.email);
        firebase.auth().signInWithEmailAndPassword(email.email, password.password)
        .then((userAuth) => {
            //update profile  updateProfile(userAuth.user, {  .... })
            console.log("dispatching login");

            // dispatch(
            //     login({
            //       email: userAuth.user.email,
            //       //user_id: userAuth.user.uid,
            //       name:userAuth.user.name,
            //     })
            //   )
          })
        //   .then(()=>{
        //       console.log("geting id by email");
        //       var userID;
        //       userID=getUserByEmail(email.email);
        //       console.log("Login=>userID for getUserByEmail: ",userID);
        //       dispatch(
        //         updateId({
        //               user_id: userID,
        //           })
        //       )
        //   })
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

