import React,{useState,useEffect} from 'react'
import { StyleSheet, TextInput, View, FlatList,Button } from 'react-native'
import SearchCard from './SearchCard'
import FriendCard from './FriendCard';
import Post from './Post'
import { useSelector } from 'react-redux';
import {loadFriends} from '../../redux/reducers/user';
import {addFriend} from '../../API';

import {useNavigation} from '@react-navigation/native';
const Friends =  ({user_id}) => {
    const[friend,setFriend]=useState('');
    const user = useSelector((state)=>state.user);
    var friends=user.friends[0];
    console.log('friends from store: ',friends);
    const navigation = useNavigation();

    // try{
    // const navigation = useNavigation();
    // console.log("user_id in vertical list: ",user_id);
    //  getFriends(user_id).then((result)=>{
    //     friends = Object.values(result)
    //     console.log("data in vertical list: ",friends);
    // })}     catch(error){
    //     console.log(error.message);
    //}
    return (
        <View>
            <TextInput
                placeholder="Enter Friend's email to add him"
                onChangeText={(friend) => setFriend({friend})}
            />
            <Button
                onPress={()=> {
                    loadFriends(friend.friend);
                    addFriend(user.value.user_id.user_id,friend.friend)}}
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
