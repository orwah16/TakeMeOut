import React, {useState} from 'react'
import { View, TextInput , Image, Button } from 'react-native';

//import firebase from 'firebase'
//import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

require("firebase/firestore")
require("firebase/firebase-storage")

export default function save(props,navigation) {
    //console.log(props.route.params.image)//can find this path in the object in the console
    const [caption, setCaption] = useState("")
    const uploadImage = async () => {
        const uri = props.route.params.image;
        const resposnse = await fetch(uri);
        const blob = await Response.blob();

        const task = firebase
            .storage()
            .ref()
            .child('post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}')//create random child path
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
    const savePostData = (downloadURL) => {
        firebase.firestore().collection('posts').doc(firebase.auth().currentUser.uid)
        .collection("userPosts")
        .add({
            downloadURL,
            caption,
            creation: firebase.firestore().fieldValue.serverTimstamp()
        }).then((function(){
            navigation.popToTop()//poptottop goes to the first rout (Main)
        }))
    }
    return (
        <View style={{flex: 1}}>
            <Image source={{uri: props.route.params.image}}/>
            <TextInput
                placeholder= "Write a Caption ..."
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button title="Save" onPress={() => uploadImage()}/>
        </View>
    )
}
