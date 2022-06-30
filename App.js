
import React from 'react';
import Index from './Index'
//import * as firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth"
import { Provider, useDispatch, useSelector } from 'react-redux'
//import { createStore, applyMiddleware } from 'redux'

//const store = configeureStor(rootReducer, applyMiddleware(thunk))



import { configureStore } from '@reduxjs/toolkit';

import userReducer from './redux/reducers/user';
//redux store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

//for redux to have context
function App(){
  return(
    <Provider store={store}>
      <Index/>
    </Provider>
  )
}


export default App;
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loaded:false,
//       data:null
//     }
//   }
  // componentDidMount(){
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if(!user){
  //       this.setState({
  //         loggedIn: false,
  //         loaded: true,
  //       })
  //     }else{
  //       this.setState({
  //         loggedIn: true,
  //         loaded: true,
  //       })
  //     }
  //   })
  //   this.callBackendAPI()
  //     .then(res=>this.setState({data: res.express}))
  //     .catch(err=>console.log(err));
  // }
  // callBackendAPI = async () => {} 
  // render(){
  //   const {loggedIn,loaded} = this.state;
  //   if(!loaded){
  //     return(
  //       <View style={{flex: 1,justifyContent: 'center'}}>
  //         <Text>Loading</Text>
  //       </View>
  //     )
  //   }
  //   if(!loggedIn){
  //     return (
  //       <NavigationContainer>
  //         <Stack.Navigator initialRoutName="Landing">
  //           <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:false}}></Stack.Screen>
  //           <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
  //           <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
  //           {/* <Stack.Screen name="Post" component={PostScreen} ></Stack.Screen> */}

  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     );
  //   }
  //   return(
  //     <Provider store={store}>
  //       <NavigationContainer>
  //         <Stack.Navigator initialRoutName="Main">
  //           <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}></Stack.Screen>
  //           {/* <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation}></Stack.Screen> */}
  //           <Stack.Screen name="Save" component={SaveScreen}></Stack.Screen>
  //         </Stack.Navigator>  
  //       </NavigationContainer>
  //     </Provider>
  //   )
  // }
//}

//export default App