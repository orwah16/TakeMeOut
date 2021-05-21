import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Text, View } from 'react-native';

import * as firebase from 'firebase'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrOQDj1eIgMDMrbYCh0VwgexFNJ-GtezY",
  authDomain: "takemeout-4329b.firebaseapp.com",
  projectId: "takemeout-4329b",
  storageBucket: "takemeout-4329b.appspot.com",
  messagingSenderId: "1022034358793",
  appId: "1:1022034358793:web:cf50ba54b73c7aff5ffed8",
  measurementId: "G-5YFV74KLYH"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'
import AddScreen from './components/main/Add'
import SaveScreen from './components/main/Save'

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loaded:false,
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render(){
    const {loggedIn,loaded} = this.state;
    if(!loaded){
      return(
        <View style={{flex: 1,justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRoutName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRoutName="Main">
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation}></Stack.Screen>
            <Stack.Screen name="Save" component={SaveScreen}></Stack.Screen>
          </Stack.Navigator>  
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App