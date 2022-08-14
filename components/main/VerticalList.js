import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import SearchCard from './SearchCard'
import {useNavigation} from '@react-navigation/native';
import Post from './Post'
const VerticalList = ({data}) => {
    console.log("items in vertical list: ",data);
    const navigation = useNavigation();
    return (
        <View>
            <FlatList nestedScrollEnabled={true}
            data={data} keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <SearchCard item={item} onPress={()=> navigation.navigate('Post',{item})}/>}/>
        </View>
    )
}

export default VerticalList

const styles = StyleSheet.create({})
