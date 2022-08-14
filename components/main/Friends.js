import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import SearchCard from './SearchCard'
import FriendCard from './FriendCard';
import Post from './Post'
import {getFriends } from '../../API';


import {useNavigation} from '@react-navigation/native';
const Friends =  ({user_id}) => {
    var friend = {
        
    }
    var friends;
    try{
    const navigation = useNavigation();
    console.log("user_id in vertical list: ",user_id);
     getFriends(user_id).then((result)=>{
        friends = Object.values(result)
        console.log("data in vertical list: ",Object.values(friends));
    })}     catch(error){
        console.log(error.message);
    }
    return (
        <View>
            <FlatList nestedScrollEnabled={true}
            data={friends} keyExtractor={item => item.user_id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <SearchCard item={item} onPress={()=> navigation.navigate('Post',{item})}/>}/>
        </View>
    )
}

export default Friends

const styles = StyleSheet.create({})
