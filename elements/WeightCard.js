import { Button, Text } from 'galio-framework';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MyCard from '../components/MyCard';
import MyInput from '../components/MyInput';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import showToast from '../utils/showToast';
const Row = (prop) => {
    return (
        <View style={styles.row}>
        <Text style={styles.text}>{prop.text} </Text>
        <MyInput color="black" type="number-pad" style={styles.input} value={prop.value} onChangeText={input=>prop.handleChange(input,prop.type)}/>
        {prop.icon === 'kg'?<MaterialCommunityIcons name="weight-kilogram" size={24} color="black" style={styles.icon}  />:
        <FontAwesome name="rupee" size={24} color="black" style={styles.icon} />}
    </View>
    )
}
const WeightCard=(props)=>{
    const [weight,setWeight]=useState("");
    const [unitPrice,setUnitPrice]=useState("");
    const [extra,setExtra]=useState("");
    const [allCorrect,setAllCorrect]=useState(false)

    const handleChange=(text,type)=>{
        switch(type){
            case "weight":
                setWeight(text);
                break;
            case "price":
                setUnitPrice(text);
                break;
            case "extra":
                setExtra(text);
                break
            default:
                showToast("something went wrong!");
        }
    }
    useEffect(()=>{
        const weightNum=parseFloat(weight);
        const princeNum=parseFloat(unitPrice);
        const extraNum=parseFloat(extra);
        if(!isNaN(weightNum) && !isNaN(princeNum)){
            const total =isNaN(extraNum)? weightNum * princeNum :weightNum * princeNum + extraNum;
            props.setPrice(total);
            setAllCorrect(true);
        } else {
            setAllCorrect(false);
            props.setPrice(null);
        }

    },[weight,unitPrice,extra,setAllCorrect]);
return (
    <MyCard>
        <Row text="Price per kg" icon="rs" type="price" value={unitPrice} handleChange={handleChange}/>
        <Row text="Total Weight" icon="kg" type="weight" value={weight}  handleChange={handleChange}/>
        <Row text="Extra Cost" icon="rs" type="extra" value={extra}  handleChange={handleChange}/>
        {allCorrect?<Button round onPress={props.calculatePrice}>Calculate Price</Button>:<></>}
</MyCard>
)
}
const styles=StyleSheet.create({
    row:{
        flexDirection:"row",
        alignItems:'center',
        marginHorizontal:10
    },
    text:{
        fontSize:18,
        width:"40%"
    },
    input:{
        height:35,
        width:100
    },
    icon:{
        width:30,
        marginLeft:10
    }
});
export default WeightCard;