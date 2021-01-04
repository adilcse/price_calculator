import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyCard from '../components/MyCard';
const UnitPriceCard=({total,ppu})=>{
    return(
        <MyCard style={styles.dataCard}>
            <Text style={styles.dataText}>Total cloth length </Text>
            <View style={styles.row}>
                <Text style={styles.dataTextBold}>{Math.round(total)} in</Text>
                <Text style={styles.dataText}> ~ </Text>
                <Text style={styles.dataTextBold}>{(total/39).toFixed(2)} m</Text>
            </View>
            <Text style={styles.dataText}>price per unit</Text>
            <View style={styles.row}>
                <Text style={styles.dataTextBold}>{ppu.toFixed(2)}/in</Text>
                <Text style={styles.dataText}> ~ </Text>
                <Text style={styles.dataTextBold}>{(ppu*39).toFixed(2)}/m</Text>
            </View> 
    </MyCard>
    )
}
const styles=StyleSheet.create({
    dataText:{
        fontSize:18
    },
    dataTextBold:{
        fontSize:18,
        fontWeight:"bold",
        color:"black"
    },
    dataCard:{
        minHeight:100,
        justifyContent:"center",
        alignSelf:"center",
        overflow:"hidden"

    },
    row:{
        flexDirection:"row"
    }
});

export default UnitPriceCard;