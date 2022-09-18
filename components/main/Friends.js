import React,{useState,useEffect} from 'react'
import { StyleSheet, TextInput, View, FlatList,Button } from 'react-native'
import SearchCard from './SearchCard'
import FriendCard from './FriendCard';
import Post from './Post'
import { useSelector,useDispatch } from 'react-redux';
import {reloadFriends} from '../../redux/reducers/user';
import {addFriend,getFriends} from '../../API';

import {useNavigation} from '@react-navigation/native';
const Friends =  ({}) => {
    const dispatch = useDispatch();
    const[friend,setFriend]=useState('');
    const user = useSelector((state)=>state.user);
    var friends=user.friends[0];
    console.log('friends from store: ',friends);
    const navigation = useNavigation();
    // useEffect(()=>{
    //         getFriends(user.value.user_id.user_id).then((response)=>{
    //           console.log('user friends response: ',response);
    //           dispatch(
    //             loadFriends({
    //               friend: response,
    //           }))
    //         })
    //     },[friend])


    // try{
    // const navigation = useNavigation();
    // console.log("user_id in vertical list: ",user_id);
    //  getFriends(user_id).then((result)=>{
    //     friends = Object.values(result)
    //     console.log("data in vertical list: ",friends);
    // })}     catch(error){
    //     console.log(error.message);
    //}
    useEffect(()=>{
        getFriends(user.value.user_id.user_id).then((response)=>{
          console.log('user friends response: ',response);
          dispatch(
            reloadFriends({
              friend: response,
          }))
        })
    },[friend])
    return (
        <View>
            <TextInput
                placeholder="Enter Friend's email to add him"
                onChangeText={(friend) => setFriend({friend})}
            />
            <Button
                onPress={()=> {
                    //loadFriends(friend.friend);
                    addFriend(user.value.user_id.user_id,friend.friend)
                    setFriend(friend.friend)
                }}
                title="Add"
            />
            <FlatList nestedScrollEnabled={true}
            data={friends} keyExtractor={item => item.user_id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <FriendCard item={item} onPress={()=> navigation.navigate('Post',{item})}/>}/>
        </View>
    )
}

export default Friends

const styles = StyleSheet.create({})
