import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'galio-framework';
import React, { useEffect, useState } from 'react';
import {  StyleSheet, View } from 'react-native';
import MyCard from '../components/MyCard';
import MyInput from '../components/MyInput';
const ItemDetails=({item})=>{
    const [finalPrice,setFinalPrice]=useState(item.cost);
    useEffect(()=>{
        setFinalPrice(item.cost);

    },[item])
    const handleChange=(text)=>{
        const extras=text.split(",");
        let numOr0 = n => isNaN(parseFloat(n)) ? 0 :parseFloat(n);
        const sumExtra = extras.reduce((a,b)=>numOr0(a) + numOr0(b));
        let total = parseFloat(item.cost)+parseFloat(sumExtra);
        total = isNaN(total)?item.cost:total;
        setFinalPrice(total)
    }

return (
    <MyCard style={styles.container}>
     <Text style={styles.title}>{item.name}</Text>
     <View style={styles.row}>
         <Text style={styles.h2}>Cost of cloth</Text>
         <FontAwesome name="rupee" size={15} color="black" style={styles.icon} />
<Text style={{fontSize:18,fontWeight:"bold",color:"black"}}>{item.cost}</Text>
     </View>
     <View style={styles.row}>
         <Text style={styles.h2}>Other Costs</Text>
        <MyInput style={styles.input} color="black" fontSize={18} placeholder="use , to add" placeholderTextColor="grey" type="numeric" onChangeText={handleChange}/>
     </View>
     <View style={styles.finalContainer}>
         <Text style={styles.h1}>Final Cost</Text>
         <FontAwesome name="rupee" size={20} color="black" style={styles.icon} />
<Text style={{fontSize:24,fontWeight:"bold",color:"black"}}> {Math.round(finalPrice)}</Text>
     </View>
</MyCard>
)
}
const styles=StyleSheet.create({    
 container:{
    maxHeight:500,
    width:"95%"
 },
 title:{
     fontSize:20
 },
 row:{
     flexDirection:"row",
     width:"90%",
     alignItems:'center',
 },
 h2:{
     fontSize:18,
     width:"50%",

 },
 h1:{
    fontSize:22,
    width:"50%",
    color:"black"

},
 input:{
    alignItems:"flex-start",
 },
 finalContainer:{
     width:"90%",
     flexDirection:"row",
     alignItems:"center",
     marginTop:20
 }
});
export default ItemDetails;