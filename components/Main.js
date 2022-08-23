import React, { Component, useEffect } from 'react'
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchUser } from '../redux/actions/index';
import userReducer from '../App';

import FeedScreen from './main/Feed';
import AddScreen from './main/Add';
import ProfileScreen from './main/Profile';
import CreatePost from './main/CreatePost';

const Tab = createMaterialBottomTabNavigator();


function Main (){
    useEffect(()=>{ //user logged in
        //this.props.fetchUser();
    });
        return (
            <Tab.Navigator initialRoutName="Feed">
                 <Tab.Screen name="New Activity" component={CreatePost} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        ),
                    }} 
                />               
                <Tab.Screen name="Feed" component={FeedScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} 
                />
                <Tab.Screen name="Profile" component={ProfileScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                        ),
                    }} 
                />
            </Tab.Navigator>
        );
}
export default Main;
// const mapStateToProps = (store) => ({
//     currentUser: store.userState.currentUser
// })
// const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser},dispatch);
// export default connect(mapStateToProps,mapDispatchProps)(Main);
