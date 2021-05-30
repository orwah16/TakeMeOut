import React from 'react'
import {View,StyleSheet,StatusBar} from 'react-native'
import SearchBar  from './SearchBar'
import SearchCard from './SearchCard'
import ScreenTop from './ScreenTop'
import data from './fakeData'
import VerticalList from './VerticalList'
export default function Feed() {
    //const tag = data.filter(item = > item.categroy === 'tag') for filtering
    return (
        <React.Fragment>
            <SearchBar/>
            
            <VerticalList data={data}/>

        </React.Fragment>
    )
}

{/* <ScreenTop>

</ScreenTop> */}

const styles = StyleSheet.create({})