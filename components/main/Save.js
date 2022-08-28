import React, {useState} from 'react'
import { View, TextInput , Image, Button } from 'react-native';
import {updateName} from '../../redux/reducers/user';
import {addPost, addPostImage} from '../../API';

import firebase from 'firebase';
import 'firebase/storage';

export default function Save({route,navigation}) {
    var post_id;
    const SavePost = async () => {
        console.log("props to SavePost: ",route);
        post_id = await addPost(route.params).catch((error) => {//adding post without image to get post id 
            console.log(error.message);
        });
        const uri = route.params.image;
        const response = await fetch(uri);
        const blob = await response.blob();
        console.log("post id for saving image purposes: ", post_id);
        const task =  firebase
            .storage()
            .ref()
            .child('post/'+post_id)//create child path
            .put(blob);
        const taskProgress = snapshot => {
            console.log('transferred: '+snapshot.bytesTransferred)
        }
        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot)=>{
                addImagetoDB(snapshot);
                console.log(snapshot)
            })
        }
        const taskError = snapshot => {
            console.log(snapshot)
        }
        task.on(firebase.storage.TaskEvent.STATE_CHANGED,taskProgress, taskError, taskCompleted);
    }

    // need to add image url (downloadURL) to post in db
    const addImagetoDB =  (downloadURL)=>{
        console.log("downloadUrl for image in addImagetoDB: ",downloadURL);
        const res = addPostImage(post_id,downloadURL);
        console.log("result from addPostImage: ",res);
    }



    return (
        <View style={{flex: 1}}>
            {/* <Image source={{uri: props.route.params.image}}/> */}
            <Button title="Save" onPress={() => SavePost()}/>
        </View>
    )
}
