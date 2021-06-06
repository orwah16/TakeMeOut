
import { Image, StyleSheet, View} from 'react-native'
import React from 'react';


const Post = (item) => {//these two props are for making componints styles more Flexible 
    console.log(props.route.params.item)
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

export default Post
