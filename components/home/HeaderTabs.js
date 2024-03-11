import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs(props) {
  return (
    <View style={{flexDirection:"row", alignSelf:"center"}}>
        <HeaderButton title='Delivery' buttonColor = "black" textColor="white" activeTab = {props.activeTab} setActiveTab = {props.setActiveTab} />
        <HeaderButton title='Pickup' buttonColor = "white" textColor="black" activeTab = {props.activeTab} setActiveTab = {props.setActiveTab} />
    </View>
  )
}

const HeaderButton = ({title, onPress, buttonColor, textColor, activeTab, setActiveTab}) => {
    return (
        <TouchableOpacity style= {{
            backgroundColor: activeTab === title ? 'black' : 'white', 
            paddingVertical:6, 
            paddingHorizontal:16,
            borderRadius:30,
        }}
        onPress={() => setActiveTab(title)}
        >
            <Text style = {{
                color: activeTab === title ? 'white' : 'black', 
                fontSize:15, 
                fontWeight:900
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}