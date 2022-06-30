import React, {  useEffect, useState } from 'react'
import {View,Button,TextInput} from 'react-native';
//import firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth";
import { useDispatch } from 'react-redux';
import {login} from '../../redux/reducers/user';

function Login() {
    const dispatch = useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const loginToApp = (event) => {
        //console.log(userAuth.user.email);
        firebase.auth().signInWithEmailAndPassword(email.email, password.password)
        .then((userAuth) => {
            //update profile  updateProfile(userAuth.user, {  .... })
            dispatch(
                login({
                  email: userAuth.user.email,
                  user_id: userAuth.user.uid,
                  name:userAuth.user.name,
                })
              )
          })
          .catch((error) => {
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

// export class Login extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             email : '',
//             password : '',
//         }
//         this.onSignUp=this.onSignUp.bind(this)
//     }
//     onSignUp(){
//         const{ email, password} = this.state;
//         firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((result) => {
//             console.log(result)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
        
//     }
//     render() {
//         return (
//             <View>
//                 <TextInput
//                     placeholder="email"
//                     onChangeText={(email) => this.setState({email})}
//                 />
//                 <TextInput
//                     placeholder="password"
//                     secureTextEntry={true}
//                     onChangeText={(password) => this.setState({password})}
//                 />
//                 <Button
//                     onPress={()=> this.onSignUp()}
//                     title="Sign In"
//                 />
//             </View>
//         )
//     }
// }

// export default Login
