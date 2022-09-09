import { Image, StyleSheet, View ,TouchableWithoutFeedback} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState } from 'react';
import Title from './Title'
import Subtitle from './Subtitle'
import styled from 'styled-components/native';
import { Text } from 'react-native'
import { useSelector} from 'react-redux';
import {getTaggedInPostIDs,tagPost,deleteTagFrom} from '../../API'

const SearchCard = ({style,imageStyle,item,onPress}) => {//these two props are for making componints styles more Flexible 
  const user = useSelector((state)=>state.user);
  const [tagged, setTag] = useState(false);
  const [participants, setParticipants] = useState(0);
    console.log("item inside SearchCard: ",item);
    const{post_id,user_id,post_interest,post_location,post_title,text,post_date,image}= item;
    const partsArray = post_date.split('T');
    const date = partsArray[0];
    const time = partsArray[1].split('.')[0];
    console.log("time: "+time+" date: "+date);
    console.log("user_id in search card: "+ user_id);
   getTaggedInPostIDs(post_id).then((IDs)=>{
      console.log("ids in search card: ",IDs);
      setParticipants(IDs.length); // participants == number of tagged (which includes poster)
      // IDs.forEach((id) =>{
      // console.log("current user_id: "+id.user_id+"   post user_id: "+user_id);
      // if(id.user_id == user_id){ // if this is the poster give him gold star
      //     setTag(true);
      // }})
      if(user.value.user_id.user_id == user_id){ // if this is the poster give him gold star
        setTag(true);
      }
      console.log("star: ",tagged);
  });

    const manageTags = (event) => {
      console.log("managing tags in searchCard");
      if ((tagged==true) && (user_id != user.value.user_id.user_id)){
        setTag(false);
        setParticipants(participants-1);
        deleteTagFrom(user_id,post_id);
      }else if(tagged==false){
        setTag(true);
        setParticipants(participants+1);
        tagPost(user_id,post_id);
      }      
    }
    if(tagged==true){
      return (
        <TouchableWithoutFeedback onPress={onPress}>
        <Card>
          <Card_header_img >
            <Image         source={{uri: image}} style={[styles.image,imageStyle]} />
          </Card_header_img>
          <Tag>
            <Text style={[styles.tag]}>{post_interest}</Text>
          </Tag>
          <Row>
            <Location>
              <Text> {"location: "+ post_location} </Text>
            </Location>
            <Text style={[styles.text]}>{"time: "+time+"   date: "+date}</Text>
          </Row>
          <Card_body>
            <Row style={{width: '100%'}}>
              <Image source={require('../../assets/profilepic.png')} style={[styles.image2,imageStyle]} />
              <Text style={[styles.number]} >{"Participants :  "+participants}</Text>
              <AntDesign name='staro' style={{fontSize: 50 ,flex: 1 , color: 'gold' ,textAlign: "right",marginRight: 50 ,marginTop: 30}} onPress={() => manageTags()}/>
            </Row>
            <Title style={[styles.text]}>{post_title}</Title>
            <Subtitle style={[styles.text]}>{text}</Subtitle>
          </Card_body>
        </Card>
      </TouchableWithoutFeedback>
      )}else{
        return(
        <TouchableWithoutFeedback onPress={onPress}>
        <Card>
          <Card_header_img >
            <Image         source={{uri: image}} style={[styles.image,imageStyle]} />
          </Card_header_img>
          <Tag>
            <Text style={[styles.tag]}>{post_interest}</Text>
          </Tag>
          <Row>
            <Location>
              <Text> {"location: "+ post_location} </Text>
            </Location>
            <Text style={[styles.text]}>{"time: "+time+"   date: "+date}</Text>
          </Row>
          <Card_body>
            <Row style={{width: '100%'}}>
              <Image source={require('../../assets/profilepic.png')} style={[styles.image2,imageStyle]} />
              <Text style={[styles.number]} >{"Participants :  "+participants}</Text>
              <AntDesign name='staro' style={{fontSize: 50 ,flex: 1 ,textAlign: "right",marginRight: 50 ,marginTop: 30}} onPress={() => manageTags()}/>
            </Row>
            <Title style={[styles.text]}>{post_title}</Title>
            <Subtitle style={[styles.text]}>{text}</Subtitle>
          </Card_body>
        </Card>
      </TouchableWithoutFeedback>
      )}
}

export default SearchCard

const styles = StyleSheet.create({

    image:{
        width: '100%',
        height: 200,

    },
    image2:{
        aspectRatio: 1 / 1,
        borderRadius: '50%',
        margin: 5,
        padding: 5,
        flex: 0.5,
      

    },
    tag:{ 
    color: "white",
    fontWeight: "bold",
    },
    location:{ 
        color: "blue",
    },
    text:{
      justifyContent:"center",
        flex: 1,
        fontSize: 15,
        textAlign: "center",
    },
    number:{
      justifyContent:"center",
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 30,
        paddingLeft: 50,
        color: '#47bcd4',
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

  const Row = styled.View`
  flex-direction: row;
  hight: fit-content;
  margin: 5px;
  justify-content: space-between;

`;




