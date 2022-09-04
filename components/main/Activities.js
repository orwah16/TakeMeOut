import React, { useState, useEffect } from 'react'
import VerticalList from './VerticalList'
import {getTaggedInPosts } from '../../API'
import { useSelector } from 'react-redux';
import {numberOfTaggedPosts} from '../../redux/reducers/user'

export default function Activities() {
    const user = useSelector((state)=>state.user);
    const [posts, setPosts] = useState([]);
    console.log("..... Activities ......");

    useEffect(() => {
        const getPosts = async() => {
            try{
                console.log("getting posts to Activities: ",user.value.user_id.user_id);
                const newData = await getTaggedInPosts(user.value.user_id.user_id);
                console.log("Activity get Data= ",newData);
                setPosts(newData);
                console.log("posts: ",posts);
                numberOfTaggedPosts(posts.length());
            } catch (error) {
                console.log('Error while getting tagged posts.',error.message)
            }
        }
        getPosts();
    },[]); //to search for the value in the drop
    return(<VerticalList data={posts}/>);
}
