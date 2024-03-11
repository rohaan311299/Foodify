import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories';
import RestaurantItems, {localRestaurants,} from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';
import { Divider } from 'react-native-elements';

const YELP_API_KEY = "0nrVpmXrVN71Br2upr5WLAx8ZWIvh8yu9qwGg0Nk0LPN7rxPQIVSOF17760sEcSDtOxnN7_NJ2mPPtGOz8SNXCByvULzugGlaTDqJGdv_GEd2k4IzLRXDUNMsS_uZXYx";

export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Diego");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers:{
                Authorization:`Bearer ${YELP_API_KEY}`
            }}
            return fetch(yelpURL, apiOptions)
                .then(res => res.json())
                .then(json => setRestaurantData(
                    json.businesses.filter((business) => 
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                ))
    };

    useEffect(() =>{
        getRestaurantsFromYelp();
    }, [city, activeTab])

    return (
        <SafeAreaView style= {{backgroundColor:"#eee", flex: 1}}>
            <View style={{backgroundColor:"white", padding:15}}>
                <HeaderTabs activeTab = {activeTab} setActiveTab = {setActiveTab} />
                <SearchBar cityHandler = {setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Categories />
                <RestaurantItems restaurantData = {restaurantData} navigation = {navigation}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}