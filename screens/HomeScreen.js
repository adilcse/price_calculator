import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import WeightCard from "../elements/WeightCard";
import WeightOptput from "../elements/WeightOutput";
const HomeScreen = (props) => {
    const [price,setPrice]=useState(null);
    const calculatePrice=()=>{
        props.navigation.push("Details",{cost:price})
    }
return(
    <View style={styles.container}>
        <Text style={styles.heading}>Price Calculator</Text>
        <WeightCard calculatePrice={calculatePrice} setPrice={setPrice}/>
       {!price || isNaN(price)?<></>:<WeightOptput price={price}/>}
    </View>
)
}
const styles=StyleSheet.create({
   container:{ 
        flex: 1,
        alignItems: "center",
        backgroundColor:"white"
    },
    heading:{
        fontSize:18,
        marginVertical:5,
        textTransform:"uppercase",
        opacity:0.8
    }
})
export default HomeScreen;