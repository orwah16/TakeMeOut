import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import SearchCard from './SearchCard'
import {useNavigation} from '@react-navigation/native';
import {useSelector } from 'react-redux';
import {getTaggedInPostNumbers} from '../../API'
import Numbers from './Numbers'
const VerticalList = ({data}) => {
    const user = useSelector((state)=>state.user);
    const posts=data;
    console.log("items in vertical list: ",data);
    const navigation = useNavigation();

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
            renderItem={({item}) => <SearchCard item={item} onPress={() => showNumbers(item.user_id,item.post_id)}/>}/>
        </View>
    )


}

export default VerticalList

const styles = StyleSheet.create({})




//onPress={()=> navigation.navigate('Post',{item})}