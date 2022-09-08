import NumbersCard from "./NumberCard";
import {View,FlatList} from 'react-native';



const Numbers = (numbers) => {//these two props are for making componints styles more Flexible 
    console.log("numbers in Numbers: " ,numbers.route.params.numbers);
    const nums = numbers.route.params.numbers;
    return(
        <View>
            <FlatList nestedScrollEnabled={true}
                data={nums} keyExtractor={item => item.phone_number}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <NumbersCard item={item.phone_number}/>}/>
        </View>   
    )
}

export default Numbers;


