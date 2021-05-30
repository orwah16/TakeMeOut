import { Image, StyleSheet, View } from 'react-native'
import React from 'react';
import Title from './Title'
import Subtitle from './Subtitle'

const SearchCard = ({style,imageStyle,item}) => {//these two props are for making componints styles more Flexible 
    const{thumbnail,title,desc}= item;
    return (
        <View style={[styles.container,style]}>
            <Image source={{uri: thumbnail} } style={[styles.image,imageStyle]}/>
            <View style={styles.contentContainer}>
            <Title>{title}</Title>
            <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    )
}

export default SearchCard

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
