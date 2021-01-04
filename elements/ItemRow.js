import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Input } from 'galio-framework';
const ItemRow = ({item, index, handleChange, deleteItem}) => {
    return (
        <View style={styles.row}  >
        <Input color="black" value={item.name} onChangeText={(text)=>handleChange(index,text,"name")} style={styles.title}/>
        <Input color="black" type="number-pad" placeholder="P"  value={item.piece} onChangeText={(text)=>handleChange(index,text,"piece")} placeholderTextColor="grey" style={{...styles.input1,borderColor:item.pieceError?"red": "grey"}}/>
        <Input color="black" type="decimal-pad" placeholder="use , to x"  placeholderTextColor="grey" style={{...styles.input,borderColor:item.detailError?"red": "grey"}}  value={item.details} onChangeText={(text)=>handleChange(index,text,"details")}/>
        <AntDesign name="delete" size={24} color="black" style={styles.icon} onPress={()=>deleteItem(index)}/>
    </View>
    )
}
const styles=StyleSheet.create({
    row:{
        flexDirection:"row",
        alignItems:'center',
        marginHorizontal:10,
    },
    text:{
        fontSize:18,
    },
    title:{
        borderWidth:0,
        width:100,
        padding:0
    },
    input:{
        width:100,
        marginRight:10,
    },
    input1:{
        width:60,
        marginRight:10,
        padding:0
    },
    icon:{
        width:30,
        marginLeft:10
    }
});
export default ItemRow;