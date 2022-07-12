import React from 'react'
import {View,StyleSheet,StatusBar} from 'react-native'
import SearchBar  from './SearchBar'
import SearchCard from './SearchCard'
import ScreenTop from './ScreenTop'
import data from './fakeData'
import VerticalList from './VerticalList'
import apiClient from '../../client';
import { logout } from '../../redux/reducers/user'
import { store } from '../../App'
import { useDispatch } from 'react-redux';


export default function Feed() {
    const dispatch = useDispatch();

    // const getData = async () => {
    //     try{
    //         const res = await apiClient.get('/users');
    //         console.log("res = ",res);
    //     } catch (error) {
    //         console.log('Error while getting users.',error.message)
    //         return[];
            
    //     }
    // }

     
    //const tag = data.filter(item = > item.categroy === 'tag') for filtering
    return (
        <React.Fragment>
            <ScreenTop>

            <SearchBar/>
            <VerticalList data={data}/>
            </ScreenTop>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({})