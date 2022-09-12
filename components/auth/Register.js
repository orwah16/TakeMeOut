import React, {  useEffect, useState } from 'react'
import {StyleSheet,View,Button,TextInput} from 'react-native'
//import firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth"
import { useDispatch } from 'react-redux';
import {updateName} from '../../redux/reducers/user';
import {addUser,getUserByEmail} from '../../API';
import styled from 'styled-components/native';

//import '../../Index'


function Register(){
    const dispatch = useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const[phone_number,setPhoneNumber]=useState('');

    const registerToApp = (event) =>{
        
        firebase.auth().createUserWithEmailAndPassword(email.email, password.password)
        .then(() => {
            console.log("dispatch mother fucker");
            dispatch(
                updateName({
                  first_name: first_name.first_name,
                  last_name: last_name.last_name,
                })
            )
        })
        .then(addUser(first_name.first_name,last_name.last_name,email.email,phone_number.phone_number))
        .catch((error) => {
           console.log('user not added');
           console.log("first name: ",first_name.first_name);
        });
    }
        return (
            <View>
                <Card>
                <TextInput style={[styles.text]}
                    placeholder="first name"
                    onChangeText={(first_name) => setFirstName({first_name})}
                />
                </Card>
                <Card>
                <TextInput style={[styles.text]}
                    placeholder="last name"
                    onChangeText={(last_name) => setLastName({last_name})}
                />
                </Card>
                <Card>
                <TextInput style={[styles.text]}
                    placeholder="email"
                    onChangeText={(email) => setEmail({email})}
                />
                </Card>
                <Card>
                <TextInput style={[styles.text]}
                    placeholder="phone number"
                    onChangeText={(phone_number) => setPhoneNumber({phone_number})}
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
                    onPress={()=> registerToApp()}
                    title="Sign Up"
                />
            </View>
        )
}

export default Register;


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