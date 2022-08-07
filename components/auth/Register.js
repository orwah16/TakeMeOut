import React, {  useEffect, useState } from 'react'
import {View,Button,TextInput} from 'react-native'
//import firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth"
import { useDispatch } from 'react-redux';
import {updateName} from '../../redux/reducers/user';
import {addUser,getUserByEmail} from '../../API';
//import '../../Index'


function Register(){
    const dispatch = useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');

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
        .then(addUser(first_name.first_name,last_name.last_name,email.email))
        .catch((error) => {
           console.log('user not added');
           console.log("first name: ",first_name.first_name);
        });
    }
        return (
            <View>
                <TextInput
                    placeholder="first name"
                    onChangeText={(first_name) => setFirstName({first_name})}
                />
                <TextInput
                    placeholder="last name"
                    onChangeText={(last_name) => setLastName({last_name})}
                />
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
                    onPress={()=> registerToApp()}
                    title="Sign Up"
                />
            </View>
        )
}

export default Register;

