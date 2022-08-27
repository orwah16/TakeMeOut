import React, {  useEffect, useState } from 'react'
import {useSelector } from 'react-redux';
import {View,Button,TextInput, DatePickerIOS} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Add from './Add';
function CreatePost( { navigation }) {
    const[interest,setInterest]=useState('');
    const[title,setTitle]=useState('');
    const[desc,setDescription]=useState('');
    const[location,setLocation]=useState('');
    const user = useSelector((state)=>state.user);

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
                    user_id:user.value.user_id.user_id,
                    interest:interest.interest,
                    location:location.location,
                    title:title.title,
                    desc:desc.desc,
                    navigation:navigation,
                })}
                title="Pick Image"
            />
            <Button
                onPress={()=> navigation.navigate('Save',{
                    user_id:user.value.user_id.user_id,
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
