import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const WeightOptput = (props) => {
return (
    <View style={styles.container}>
        <Text style={styles.heading}> Total Cost of roll is</Text>
        <View style={styles.price}>
            <FontAwesome name="rupee" size={24} color="black" style={styles.icon} />
<Text style={styles.output}>{props.price.toFixed(2)}</Text>
        </View>

    </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginTop:30,
        width:"90%",
        alignItems:"center"
    },
    heading:{
        fontSize:18
    },
    output:{
        fontSize:20,
    fontWeight:'bold',
    marginLeft:5
    },
    price:{
        flexDirection:"row",
        alignItems:"center"
    }
})
export default WeightOptput;