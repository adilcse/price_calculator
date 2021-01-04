import React from "react";
import { StyleSheet, View } from "react-native";

const MyCard=(props)=>{
return(
    <View style={{...styles.container,...props.style}}>
        {props.children}
    </View>
)
}
const styles=StyleSheet.create({
    container:{
        margin:10,
        width:"90%",
        minHeight:200,
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        elevation:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
    }
})
export default MyCard;