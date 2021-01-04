import React from 'react'
import { StyleSheet } from "react-native";
import { Input } from 'galio-framework';
const MyInput = (props) =>{
return (<Input placeholder="cost" {...props} style={{...props.style,...styles.container}} />)
}
const styles=StyleSheet.create({
    container:{
        padding:0,
    }
})
export default MyInput;