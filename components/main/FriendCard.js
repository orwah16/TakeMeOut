import { Image, StyleSheet, View ,TouchableWithoutFeedback} from 'react-native'
import React from 'react';
import Title from './Title'
import Subtitle from './Subtitle'

const FriendCard = ({style,imageStyle,item,onPress}) => {//these two props are for making componints styles more Flexible 
    console.log("item inside FriendCard: ",item);
    const{first_name,last_name}= item;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container,style]}>
                <Image source={require('../../assets/profilepic.png')} style={[styles.image,imageStyle]}/>
                <View style={styles.contentContainer}>
                <Title>{first_name +' '+ last_name}</Title>
                <Subtitle>{desc}</Subtitle>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FriendCard

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image:{
        width: '100%',
        height: 200,

    },
    contentContainer:{
        padding: 5,
    },
});
