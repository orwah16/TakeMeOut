import Subtitle from "./Subtitle";
import {Text,StyleSheet} from 'react-native';
import styled from 'styled-components/native';
const NumbersCard = (number) => {
    console.log("number in number card: ",number.item);
    return(
        <Card>
            <Text style={styles.numberCard}>{ number.item }</Text>
            </Card>
    )
}
export default NumbersCard;

const styles = StyleSheet.create({
    numberCard:{
        textAlign: "center",
        fontWeight: 'bold', 
        fontSize: 20,
    },

});

const Card = styled.View`
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 90%;
  margin-bottom: 10px;
  `;