import { View, Text } from 'react-native'
import React from 'react'
import About from "../components/RestaurantDetails/About";
import { Divider } from 'react-native-elements';
import MenuItem from '../components/RestaurantDetails/MenuItem';
import ViewCart from '../components/RestaurantDetails/ViewCart';


export default function RestaurantDetails({route, navigation}) {
  return (
    <View>
        <About route = {route} />
        <Divider width={1.8} style={{marginVertical:20}} />
        <MenuItem restaurantName={route.params.name} />
        <ViewCart  navigation={navigation} restaurantName={route.params.name}/>
    </View>
  )
}