import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

export default function ViewCart() {
    const items = useSelector((state) => state.cartReducer.selectedItems.items);
    const total = items.map((item) =>Number(item.price.replace("$", ""))).reduce((prev, curr)=> prev + curr,0)

    const totalUSD = total.toLocaleString('en', {style:"currency", currency:"USD"});
  return (
    <>
    {total ? (
    <View style={{flex:1, alignItems:"center", flexDirection:"row", position:"absolute", bottom:50, zIndex:999, justifyContent:'center'}}>
        <View style={{flexDirection:"row", justifyContent:"center", width:"100%"}}>
            <TouchableOpacity style={{marginTop:20, backgroundColor:"black", flexDirection:'row', 'justifyContent':'flex-end', alignItems:"center", padding:15, borderRadius:30, width:300, position:"relative"}}>
                <Text style={{color:"white", fontSize:20, marginRight:30}}>View Cart</Text>
                <Text style={{color:"white", fontSize:20}}>{totalUSD}</Text>
            </TouchableOpacity>
        </View>
    </View>):(
    <></>)}
    </>
  )
}