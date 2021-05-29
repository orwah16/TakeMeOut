import { StyleSheet, StatusBar, View } from 'react-native'

const ScreenTop = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default ScreenTop;

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1
    }
})
