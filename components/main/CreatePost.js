import React, {  useEffect, useState } from 'react'
import {useSelector } from 'react-redux';
import {View,Button,TextInput, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Add from './Add';
function CreatePost( { navigation }) {
    const[interest,setInterest]=useState('');
    const[title,setTitle]=useState('');
    const[desc,setDescription]=useState('');
    const[location,setLocation]=useState('');
    const user = useSelector((state)=>state.user);

    return (
        <View>
            <Card>
                <TextInput style={[styles.text]}
                placeholder="Interest"
                onChangeText={(interest) => setInterest({interest})}
            />
            </Card>
            <Card>
                <TextInput style={[styles.text]}
                placeholder="Location"
                onChangeText={(location) => setLocation({location})}
            />
            </Card>
            <Card>
                <TextInput style={[styles.text]}
                placeholder="Title"
                onChangeText={(title) => setTitle({title})}
            />
            </Card>
            <Description>
                <TextInput style={[styles.text]}
                placeholder="Descreption"
                onChangeText={(desc) => setDescription({desc})}
            />
            </Description>
            <View  style={{flexDirection: "column",justifyContent: "flex-end"}}>
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
        </View>
    )
}
export default CreatePost;


const styles = StyleSheet.create({

    text:{
        fontSize: 20,
        textAlign: "center"
    },
    column:{
        flexDirection: "column",
    }
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
  const Description = styled.View`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 8px;
  height : 90px;
  overflow: hidden;
  width: 90%;
  margin-bottom: 60px;
  align_self: center;
  align_content: center;
  
  `;