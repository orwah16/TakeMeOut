import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react';

const SearchBar  = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder='Search here..'/>
        </View>

    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        marginBottom: 10
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    },

})

