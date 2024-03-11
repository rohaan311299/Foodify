import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
        title:"Paneer Makkhani",
        description:"Amazing Indian food with paneer",
        price:"$19.20",
        image:"https://myheartbeets.com/wp-content/uploads/2018/04/gluten-free-paneer-makhani-500x375.jpg",
    },
    {
        title:"Paneer Kofta",
        description:"Amazing Indian food with kofta",
        price:"$19.20",
        image:"https://femina.wwmindia.com/content/2023/jun/twalnutandpaneerkofta16876274181687627434.jpg",
    },
    {
        title:"Paneer Chilli",
        description:"Amazing Indian food with spicy paneer",
        price:"$19.20",
        image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/chilli-paneer-recipe.jpg",
    },
    {
        title:"Chole Masala",
        description:"Amazing Indian food with lentils",
        price:"$19.20",
        image:"https://vegecravings.com/wp-content/uploads/2017/01/chole-recipe-step-by-step-instructions-13-1024x865.jpg.webp",
    },
]

const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
    },
  });

export default function MenuItem({restaurantName}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkBoxValue) => dispatch({
        type:"ADD_TO_CART", 
        payload: {...item, restaurantName: restaurantName, checkBoxValue: checkBoxValue},
    })

    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);
    const isFoodInCart = (food, cartItems) => (
        Boolean(cartItems.find((item) => item.title === food.title))
    );

  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
        {foods.map((food, index) => (
            <View key = {index}>
                <View style = {styles.menuItemStyle}>
                    <BouncyCheckbox 
                        iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                        fillColor="green"
                        isChecked = {isFoodInCart(food, cartItems)}
                        onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
                    />
                    <FoodInfo food ={food} />
                    <FoodImage image = {food.image} />
                </View>
                <Divider width={0.5} orientation='vertical' style={{marginHorizontal:20}} />
            </View>
        ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
    <View style = {{width:240, justifyContent:"space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image source = {{uri: props.image}} style={{width:100, height:100, borderRadius:8}} />
    </View>
);