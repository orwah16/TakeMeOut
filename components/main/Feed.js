import React, { useState, useEffect } from 'react'
import {View,StyleSheet,StatusBar, TextInput} from 'react-native'
import SearchBar  from './SearchBar'
import SearchCard from './SearchCard'
import ScreenTop from './ScreenTop'
import data from './fakeData'
import VerticalList from './VerticalList'
import apiClient from '../../client';
import { useDispatch } from 'react-redux';
import { getFriendsPosts,getInterestingPosts } from '../../API'
import {useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Feed() {
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [searchWord,setSearchWord]=useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('interests');
    const [items, setItems] = useState([
      {label: 'Friends Posts', value: 'friends'},
      {label: 'Interested in', value: 'interests'}
    ]);
    useEffect(() => {
        const getPosts = async() => {
            try{
                console.log("getting posts to Feed: ",value);
                var newData;
                if (value == 'friends'){
                    newData = await getFriendsPosts(user.value.user_id.user_id);
                }else if (value == 'interests'){
                    newData = await getInterestingPosts(user.value.user_id.user_id);
                }
                console.log("Feed get Data= ",newData);
                setPosts([newData]);
                console.log("posts: ",posts);
            } catch (error) {
                console.log('Error while getting friends posts.',error.message)
            }
        }
        getPosts();
    },[value]); //to search for the value in the drop
    
    //const tag = data.filter(item = > item.categroy === 'tag') for filtering
    return (
        <React.Fragment>
            <ScreenTop>
            <View style={styles.container}>
                <View style={styles.drop}>
                    <DropDownPicker 
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
                <TextInput style={styles.searchInput} placeholder='Search here..'/>
            </View>
            <VerticalList data={posts}/>
            </ScreenTop>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: "space-around",
        

    },
    searchInput: {
        width: '60%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
        flex: 3
    },
    drop: {
        width: '100%',
        flex: 1
    },


})