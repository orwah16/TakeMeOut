import React, {  useEffect, useState } from 'react'
import {View,Button,TextInput, DatePickerIOS} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Add from './Add';
function CreatePost( { navigation }) {
    const[interest,setInterest]=useState('');
    const[title,setTitle]=useState('');
    const[desc,setDescription]=useState('');
    const[location,setLocation]=useState('');

    return (
        <View>
            <TextInput
                placeholder="Interest"
                onChangeText={(interest) => setInterest({interest})}
            />
            <TextInput
                placeholder="Location"
                onChangeText={(location) => setLocation({location})}
            />
            <TextInput
                placeholder="Title"
                onChangeText={(title) => setTitle({title})}
            />
            <TextInput
                placeholder="Descreption"
                onChangeText={(desc) => setDescription({desc})}
            />
            <Button
                onPress={()=> navigation.navigate('Add',{
                    interest:interest.interest,
                    location:location.location,
                    title:title.title,
                    desc:desc.desc,
                })}
                title="Pick Image"
            />
            <Button
                onPress={()=> navigation.navigate('Save',{
                    interest:interest.interest,
                    location:location.location,
                    title:title.title,
                    desc:desc.desc,
                    })
                }
                title="Save"

             />
        </View>
    )
}
export default CreatePost;
