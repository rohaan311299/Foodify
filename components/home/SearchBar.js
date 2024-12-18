import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign"

export default function SearchBar(props) {
  return (
    <View style={{marginTop:15, flexDirection:"row"}}>
        <GooglePlacesAutocomplete 
            query={{key:'AIzaSyA_UoJSW7fvC-Ie7a0Hm1bJpHKPtBWJPpU'}}
            onPress={(data, details = null) => {
                const city = data.description.split(",")[0];
                props.cityHandler(city)
            }}
            placeholder='Search' 
            styles ={{
                textInput: {
                    backgroundColor:"#eee",
                    borderRadius:20,
                    fontWeight:"700",
                    marginTop:7,
                },
                textInputContainer: {
                    backgroundColor:"#eee",
                    borderRadius:50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginRight:10
                }
            }}
            renderLeftButton={() => (
                <View style= {{marginLeft:10}}>
                    <Ionicons name="location-sharp" size={24} />
                </View>
            )}

            renderRightButton={() => (
                <View style={{
                    flexDirection:"row",
                    margin:8,
                    backgroundColor:"white",
                    padding:9,
                    borderRadius: 30,
                    alignItems:"center"

                }}>
                    <AntDesign name="clockcircle" size={11} style={{marginRight:6}}/>
                    <Text>Search</Text>
                </View>
            )}
        />
    </View>
  )
}