import React, { useState, useEffect } from 'react'
import {View,StyleSheet,ScrollView, TextInput} from 'react-native'
import SearchBar  from './SearchBar'
import SearchCard from './SearchCard'
import ScreenTop from './ScreenTop'
import data from './fakeData'
import VerticalList from './VerticalList'
import apiClient from '../../client';
import { useDispatch } from 'react-redux';
import { getFriendsPosts,getInterestingPosts,getUserInterestsOrdered,decreaseInterestRating} from '../../API'
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
                var newData=[];
                if (value == 'friends'){//for drop 
                    newData = await getFriendsPosts(user.value.user_id.user_id);
                }else if (value == 'interests'){
                    newData = await getInterestingPosts(user.value.user_id.user_id);
                }
                console.log("Feed get Data= ",newData);
                setPosts(newData);
                var array = [];
                //console.log("check: ","basketball".search("/basketball/"));
                if(searchWord!=""){//search bar
                    console.log("posts in search: ",newData);
                    newData.forEach((post)=>{
                        console.log("searchWord",searchWord.searchWord);
                        console.log("current post: ",post);
                        console.log("interest search result: ",post.post_interest.search(searchWord.searchWord));
                        if((post.post_title.search(searchWord.searchWord) != -1)
                        ||(post.post_location.search(searchWord.searchWord) != -1)
                        ||(post.post_interest.search(searchWord.searchWord) != -1)
                        ||(post.post_location.search(searchWord.searchWord) != -1)
                        ||(post.text.search(searchWord.searchWord) != -1))
                        {
                            array.push(post);
                            console.log(array);
                        }
                    })
                        newData=array;
                        setPosts(array);
                }
                if(value == 'interests'){
                    console.log("value == interests");
                    var resultArray = [];
                    var userInterests = await getUserInterestsOrdered(user.value.user_id.user_id);//sorted by rating 
                    console.log("userInterests ordered in Feed: ",userInterests);
                    resultArray = userInterests.slice(0,5);
                    console.log("resultArray ordered in Feed: ",resultArray);
                    //let updatedData = await reduceRating(user.value.user_id.user_id,resultArray);

                    for(let i = 0;i<resultArray.length;i++){
                        console.log("decreasing interest: ",resultArray[i]);
                        decreaseInterestRating(user.value.user_id.user_id,resultArray[i]);
                    }
                    let flag;
                    var chosenPosts = [];
                    //if(searchWord!="")
                    var array2 = newData ;
                    console.log("array2: ",array2);
                    resultArray.forEach((interest) => {
                        flag = false;
                        console.log("interest to pick best posts: ",interest);
                        for(let i = 0;i<array2.length;i++){
                            let post=array2[i];
                            console.log("post to add to chosen: ", post);
                            if((post.post_interest == interest) && (flag == false)){
                                flag = true;
                                console.log("Chosen Post: ",post);
                                chosenPosts.push(post);//add post to chosen
                                array2.splice(i,1);//delete post from original
                            }
                        }
                    })
                    console.log("array2 before concat: ",array2);
                    chosenPosts.concat(array2);
                    console.log("Chosen Posts: ",chosenPosts);
                    setPosts(chosenPosts);
                }
                console.log("posts: ",posts);
  
            } catch (error) {
                console.log('Error while getting friends posts.',error.message)
            }
        }
        getPosts();
    },[value,searchWord]); 

  
    //const tag = data.filter(item = > item.categroy === 'tag') for filtering
    return (
        <ScrollView style={styles.body}>
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
                <TextInput style={styles.searchInput} placeholder='Search here..'                     
                onChangeText={(searchWord) => setSearchWord({searchWord})}/>
            </View>
            <VerticalList style={styles.list} data={posts}/>
   
            </ScrollView>
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
        flex: 1,

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
    body:{
        marginTop: 30,
        flexDirection: 'column',
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
    },
    list: {
        flex: 5,
    },

})