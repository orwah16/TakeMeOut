import React from 'react'
import {View,StyleSheet,StatusBar} from 'react-native'
import SearchBar  from './SearchBar'
import SearchCard from './SearchCard'
import ScreenTop from './ScreenTop'

export default function Feed() {
    return (
        <View>
            <ScreenTop>
                <SearchBar/>
            </ScreenTop>
            <SearchCard/>
        </View>
    )
}

const styles = StyleSheet.create({})