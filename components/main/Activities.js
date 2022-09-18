import React, { useState, useEffect } from 'react'
import {getTaggedInPosts,getTaggedInPostNumbers } from '../../API'
import { useSelector,useDispatch } from 'react-redux';
import {numberOfTaggedPosts} from '../../redux/reducers/user'
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList ,RefreshControl} from 'react-native'
import SearchCard from './SearchCard'

export default function Activities(refresh) {
    const user = useSelector((state)=>state.user);
    const [posts, setPosts] = useState([]);
    const [refreshing,setRefreshing] = useState(false);
    const navigation = useNavigation();
    console.log("..... Activities ......");

    
    useEffect(() => {
        const getPosts = async() => {
            try{
                console.log("getting posts to Activities: ",user.value.user_id.user_id);
                var newData = [];
                newData = await getTaggedInPosts(user.value.user_id.user_id);
                console.log("Activity get Data= ",newData);
                setPosts(newData);
                console.log("posts in activities: ",posts);
                numberOfTaggedPosts(newData.length());
                setRefreshing(false);
            } catch (error) {
                console.log('Error while getting tagged posts.',error.message)
            }
        }
        getPosts();
    },[refreshing,refresh]); 

    // const onRefresh = React.useCallback(() =>{
    //     // var newData = [];
    //     // getTaggedInPosts(user.value.user_id.user_id).then(
    //     // console.log("Refreshing: Activity get Data= ",newData);
    //     // setPosts(newData);
    //     // numberOfTaggedPosts(newData.length());
    //     wait(2000).then(() =>{
    //         setRefreshing(false);
    //     })
    //   },[]);

    const showNumbers = (user_id,post_id) => {//check if owner of post
        console.log("user_id to showNumbers: "+ user_id + " post_id: "+post_id);
        if(user.value.user_id.user_id == user_id){
            getTaggedInPostNumbers(post_id).then((numbers)=>{
                console.log("numbers in verticalList: ",numbers);
                navigation.navigate('Numbers', {numbers});
            });
        }
    }
    return (
        <View>
            <FlatList nestedScrollEnabled={true}
            data={posts} keyExtractor={item => item.post_id}
            showsVerticalScrollIndicator={false}
            RefreshControl = {
            <RefreshControl
                refreshing={refreshing}
                onRefresh={
                        ()=>{ 
                            console.log("refreshing Activities");
                            setRefreshing(true);
                            onRefresh();
                            
                    }
                }
            />}
            renderItem={({item}) => <SearchCard item={item} onPress={() => showNumbers(item.user_id,item.post_id)}/>}/>
        </View>
    )
}
