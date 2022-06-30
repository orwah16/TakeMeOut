import React, {  useEffect, useState } from 'react'
import {View,Button,TextInput} from 'react-native'
//import firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth"
import { useDispatch } from 'react-redux';
import {login} from '../../redux/reducers/user';

function Register(){
    const dispatch = useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [name, setName] = useState('');
    const registerToApp = (event) =>{
        
        firebase.auth().createUserWithEmailAndPassword(email.email, password.password)
        .then((userAuth) => {
            dispatch(
                login({
                  email: userAuth.user.email,
                  user_id: userAuth.user.uid,
                  name: userAuth.user.name,
                })
            )
        })
        .catch((error) => {
           console.log('user not added');
        });
    }
        return (
            <View>
                <TextInput
                    placeholder="name"
                    onChangeText={(name) => setName({name})}
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


// export class Register extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             email : '',
//             password : '',
//             name: ''
//         }
//         this.onSignUp=this.onSignUp.bind(this)
//     }
//     onSignUp(){
//         const{ email, password, name} = this.state;
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((result) => {
//             firebase.firestore().collection("users")
//                 .doc(firebase.auth().currentUser.uid)
//                 .set({
//                     name,
//                     email
//                 })
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
//                     placeholder="name"
//                     onChangeText={(name) => this.setState({name})}
//                 />
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
//                     title="Sign Up"
//                 />
//             </View>
//         )
//     }
// }

//export default Register
