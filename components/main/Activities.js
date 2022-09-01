import React, { useState, useEffect } from 'react'
import VerticalList from './VerticalList'
import {getTaggedInPosts } from '../../API'
import { useSelector } from 'react-redux';


export default function Activities() {
    const user = useSelector((state)=>state.user);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async() => {
            try{
                console.log("getting posts to Feed: ",value);
                const newData = await getTaggedInPosts(user.value.user_id.user_id);
                console.log("Feed get Data= ",newData);
                setPosts([newData]);
                console.log("posts: ",posts);
            } catch (error) {
                console.log('Error while getting friends posts.',error.message)
            }
        }
        getPosts();
    },[posts]); //to search for the value in the drop
    return(<VerticalList data={posts}/>);
}
