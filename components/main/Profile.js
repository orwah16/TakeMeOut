import {Button} from 'react-native'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/user';
import data from './fakeData'
import React, {useState } from 'react'
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  TabView,
  TabBar,
  TabViewPagerScroll,
  TabViewPagerPan,
} from 'react-native-tab-view'
import PropTypes from 'prop-types'

import Posts from './Posts'
import VerticalList from './VerticalList'

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginTop: 45,
  },
  indicatorTab: {
    backgroundColor: 'transparent',
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  sceneContainer: {
    marginTop: 10,
  },
  tabBar: {
    backgroundColor: '#EEE',
  },
  tabContainer: {
    flex: 1,
    marginBottom: 12,
  },
  tabLabelNumber: {
    color: 'gray',
    fontSize: 12.5,
    textAlign: 'center',
  },
  tabLabelText: {
    color: 'black',
    fontSize: 22.5,
    fontWeight: '600',
    textAlign: 'center',
  },
  userBioRow: {
    marginLeft: 40,
    marginRight: 40,
  },
  userBioText: {
    color: 'gray',
    fontSize: 13.5,
    textAlign: 'center',
  },
  userImage: {
    borderRadius: 60,
    height: 120,
    marginBottom: 10,
    width: 120,
  },
  userNameRow: {
    marginBottom: 10,
  },
  userNameText: {
    color: '#5B5A5A',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 12,
  },
})
export default function Profile () {
  const dispatch = useDispatch();
  //const[tabs,setTabs]=useState('');

    //   avatar: PropTypes.string,
    //   name: PropTypes.string,
    //  // bio: PropTypes.string,
    //  phone: PropTypes.string,
    //  city: PropTypes.string,
    //   containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    //   tabContainerStyle: PropTypes.oneOfType([ //stats
    //     PropTypes.object,
    //     PropTypes.number,
    //   ]),
      // posts: PropTypes.arrayOf(
      //   PropTypes.shape({
      //     id: PropTypes.number,
      //     words: PropTypes.string,
      //     sentence: PropTypes.string,
      //     paragraph: PropTypes.string,
      //     image: PropTypes.string,
      //     user: PropTypes.shape({
      //       name: PropTypes.string,
      //       username: PropTypes.string,
      //       avatar: PropTypes.string,
      //       email: PropTypes.string,
      //     }),
      //   })
      // ).isRequired,

  //  defaultProps = {
  //     containerStyle: {},
  //     tabContainerStyle: {},
  //   }
    const [state,setTabs] = useState({
      tabs: {
        index: 0,
        routes: [
          { key: '1', title: 'interests', count: 0 },
          { key: '2', title: 'activities', count: 0 },
          { key: '3', title: 'friends', count: 5 },
        ],
      },
    });
    
    const onLogOut = (event) => {
      try{

          console.log("onLogOut");
          dispatch(logout());
      } catch (error) {
          console.log('Error loging out user.',error.message); 
      }
    }
  
    const onPressPlace = () => {
      console.log('place')
    }
  
    const handleIndexChange = index => {
      console.log("rendering handel index exchange");
      setTabs({
        tabs: {
          ...state.tabs,
          index,
        },
      })
    }
  
    const renderTabBar = props => {
      console.log("rendering tab bar");
      return <TabBar
        indicatorStyle={styles.indicatorTab}
        renderLabel={renderLabel(props)}
        pressOpacity={0.8}
        style={styles.tabBar}
        {...props}
      />
    };
  
    const renderLabel = props => ({ route }) => {//
      const routes = props.navigationState.routes
  
      let labels = []
      routes.forEach((e, index) => {
        labels.push(index === props.navigationState.index ? 'black' : 'gray')
      })
  
      const currentIndex = parseInt(route.key) - 1
      const color = labels[currentIndex]
  
      return (
        <View>
          <Animated.Text style={[styles.tabLabelText, { color }]}>
            {route.count}
          </Animated.Text>
          <Animated.Text style={[styles.tabLabelNumber, { color }]}>
            {route.title}
          </Animated.Text>
        </View>
      )
    }
  
    const renderScene = ({ route: { key } }) => {
      //const { posts } = this.props
      console.log("rendering scene");
      switch (key) {
        case '1':
          return <VerticalList data={data}/> //interests
        case '2':
          return <VerticalList data={data} /> //activities(posts)
        case '3':
          return <VerticalList data={data} /> //friends
        default:
          return <View />
      }
    }
  
    const renderContactHeader = () => {
      //const { avatar, name, bio } = this.props
      console.log("rendering contact header");
      return (
        <View style={styles.headerContainer}>
          <View style={styles.userRow}>
            <Image
              style={styles.userImage}
              source={{uri: '../../assets/porfilepic.png'}}  // should be changed to avatar
            />

          </View>
        </View>
      )
    }

      return (

        <ScrollView style={styles.scroll}>
        <Button
          onPress={() => onLogOut()}
          title= "Log Out"
          color= "grey"
        />
          <View style={[styles.container]}>
            <View style={styles.cardContainer}>
            <TabView
              style={[styles.tabContainer]}
              navigationState={state.tabs}
              renderScene={renderScene}
              renderTabBar={renderTabBar}
              onIndexChange={handleIndexChange}
            />
            </View>
          </View>
        </ScrollView>
      )
    }

              
