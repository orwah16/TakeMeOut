import { StyleSheet, TextInput, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import React, {  useEffect, useState } from 'react'
import { loadFeedValue } from '../../redux/reducers/user';
import { useDispatch } from 'react-redux';

const SearchBar  = () => {
    const dispatch = useDispatch();
    const [searchWord,setSearchWord]=useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Friends Posts', value: 'friends'},
      {label: 'Interests', value: 'interests'}
    ]);
    useEffect(() => {
        dispatch(
            loadFeedValue({
              feed: value,
          }))
          console.log("drop down value: ",value);
    },[value]);
    return (
        <View style={styles.container}>
            <View style={styles.drop}>
                <DropDownPicker 
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>
            <TextInput style={styles.searchInput} placeholder='Search here..'/>
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: "space-around",
        

    },
    searchInput: {
        width: '60%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
        flex: 3
    },
    drop: {
        width: '100%',
        flex: 1
    },


})

