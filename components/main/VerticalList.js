import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import SearchCard from './SearchCard'

const VerticalList = ({data}) => {
    return (
        <View>
            <FlatList
            data={data} keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <SearchCard item={item}/>}/>
        </View>
    )
}

export default VerticalList

const styles = StyleSheet.create({})
