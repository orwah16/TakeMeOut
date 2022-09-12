import React, {  useEffect, useState } from 'react'
import {View,Button,TextInput,StyleSheet} from 'react-native';
import styled from 'styled-components/native';

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
                <Card> 
                <TextInput style={[styles.text]}
                    placeholder="email"
                    onChangeText={(email) => setEmail({email})}
                />
                </Card> 
                <Card> 
                <TextInput style={[styles.text]}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword({password})}
                />
                </Card> 
                <Button
                    onPress={()=> loginToApp()}
                    title="Sign In"
                />
            </View>
        )
  }

export default Login;


const styles = StyleSheet.create({

    text:{
        fontSize: 20,
        textAlign: "center"
    },
})

const Card = styled.View`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 8px;
  height : 30px;
  overflow: hidden;
  width: 90%;
  margin-bottom: 10px;
  align_self: center;
  align_content: center;
  `;