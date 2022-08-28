import React, { useState, useEffect } from 'react'
import {View,StyleSheet,StatusBar} from 'react-native'
import SearchBar  from './SearchBar'
import SearchCard from './SearchCard'
import ScreenTop from './ScreenTop'
import data from './fakeData'
import VerticalList from './VerticalList'
import apiClient from '../../client';
import { useDispatch } from 'react-redux';
import { getFriendsPosts } from '../../API'
import {useSelector } from 'react-redux';


export default function Feed() {
    const [posts, setPosts] = useState([]);
    const user = useSelector((state)=>state.user);
    useEffect(() => {
        const getPosts = async() => {
            try{
                console.log("getting posts to Feed");
                const newData = await getFriendsPosts(user.value.user_id.user_id);
                //const newData = await result;
                console.log("Feed get Data= ",newData);
                setPosts([...newData]);
                console.log("posts: ",posts);
            } catch (error) {
                console.log('Error while getting friends posts.',error.message)
            }
        }
        getPosts();
    },[posts]);
    
     
    //const tag = data.filter(item = > item.categroy === 'tag') for filtering
    return (
        <React.Fragment>
            <ScreenTop>
            <SearchBar/>
            <VerticalList data={posts}/>
            </ScreenTop>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({})