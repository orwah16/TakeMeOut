import { Image, StyleSheet, View ,TouchableWithoutFeedback} from 'react-native'
import React from 'react';
import Title from './Title'
import Subtitle from './Subtitle'
import styled from 'styled-components/native';
import { Text } from 'react-native'

const SearchCard = ({style,imageStyle,item,onPress}) => {//these two props are for making componints styles more Flexible 
    console.log("item inside SearchCard: ",item);
    const{interest,location,title,desc,date,image}= item;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View>
                <Card>
                    <Card_header_img >
                    <Image         source={{uri: image}} style={[styles.image,imageStyle]} />
                        
                    </Card_header_img>
                    <Tag>
                    <Text style={[styles.tag]}>{interest}</Text>
                    </Tag>
                    <Row>
                        <Location>
                        <Text> {"location: "+ location} </Text>
                        </Location>
                        <Text style={[styles.text]}>{"date: "+date}</Text>
                    </Row>
                    <Card_body>
                <Image source={require('../../assets/profilepic.png')} style={[styles.image2,imageStyle]} />

                   
                <Title style={[styles.text]}>{title}</Title>
                <Subtitle style={[styles.text]}>{desc}</Subtitle>

                </Card_body>

                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SearchCard

const styles = StyleSheet.create({

    image:{
        width: '100%',
        height: 200,

    },
    image2:{
        width: 100,
        height: 100,
        borderRadius: '50%',
        margin: 5,
        padding: 5,
      

    },
    tag:{ 
    color: "white",
    fontWeight: "bold",
    },
    location:{ 
        color: "blue",
    },
    text:{
        flex: 1,
    }

});

const Body = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #f7f8fc;
  font-family: "Roboto", sans-serif;
  color: #10182f;
`;
const Container = styled.View`
  display: flex;
  width: 1040px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  `;
const Card = styled.View`
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 90%;
  margin-bottom: 10px;
  `;
const Card_header_img = styled.View`
  width: 100%;
  height: 200px;
  object-fit: cover;
  `;
const Card_body = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  min-height: 50px;
  `;

const Tag = styled.View`
  background: #cccccc;
  background-color: #47bcd4;
  border-radius: 50px;
  font-size: 12px;
  color: white;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
  width: fit-content;
  justify-content: center;
  margin: 5px;

  `;
  const Location = styled.View`
  color: blue;
  flex: 1;
  `;

const user = styled.View`
  display: flex;
  margin-top: auto;
  `;

  const Row = styled.View`
  flex-direction: row;
  hight: fit-content;
  margin: 5px;
    justify-content: space-between;

`;


