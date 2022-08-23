import React, {useState} from 'react'
import { View, TextInput , Image, Button } from 'react-native';
import {updateName} from '../../redux/reducers/user';
import {addPost} from '../../API';
//import firebase from 'firebase'
//import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

require("firebase/firestore")
require("firebase/firebase-storage")

export default function Save(props,navigation) {
    //console.log(props.route.params.image)//can find this path in the object in the console
    // const [interest, setInterest] = useState("");
    // const [location, setLocation] = useState("");
    // const [title, setTitle] = useState("");
    // const [desc, setDesc] = useState("");
    // console.log("Save props: ",props.route.params);
    // setInterest(props.route.params.interest);
    // setLocation(props.route.params.location);
    // setTitle(props.route.params.title);
    // setDesc(props.route.params.desc);

    const SavePost = async () => {
        const uri = props.route;
        const resposnse = await fetch(uri);
        const blob = await Response.blob();
        console.log("new interest: ",tag);
        
        const post_id = addPost(props.route.params).catch((error) => {//adding post without image to get post id 
            console.log(error.message);
        });
        console.log("post id for saving image purposise: ", post_id);
        const task = firebase
            .storage()
            .ref()
            .child('post/${post_id}')//create random child path
            .put(blob);
        const taskProgress = snapshot => {
            console.log('transferred: ${snapshot.bytesTransferred}')
        }
        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot)=>{
                savePostData(snapshot);
                console.log(snapshot)
            })
        }
        const taskError = snapshot => {
            console.log(snapshot)
        }
        task.on("state_changed",taskProgress, taskError, taskCompleted);
    }
    // need to add image url (downloadURL) to post in db



    // const savePostData = (downloadURL) => {
    //     firebase.firestore().collection('posts').doc(firebase.auth().currentUser.uid)
    //     .collection("userPosts")
    //     .add({
    //         downloadURL,
    //         caption,
    //         creation: firebase.firestore().fieldValue.serverTimstamp()
    //     }).then((function(){
    //         navigation.popToTop()//poptottop goes to the first rout (Main)
    //     }))
    // }
    // const savePostData = (downloadURL) => {
    //     console.log("post image url: ",downloadURL);

    // }

    return (
        <View style={{flex: 1}}>
            {/* <Image source={{uri: props.route.params.image}}/> */}
            <Button title="Save" onPress={() => SavePost()}/>
        </View>
    )
}
