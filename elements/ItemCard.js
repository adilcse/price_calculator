import { Button } from 'galio-framework';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MyCard from '../components/MyCard';
import ItemRow from './ItemRow';

const ItemCard=({items,handleChange,isAddItemEnabled,scrollRef,handleDelete,addItem,allCorrect,calculate})=>{
return (
    <MyCard style={{maxHeight:500,width:"95%"}}>
        <ScrollView ref={scrollRef} >
        {items.map((item,i)=>{return <ItemRow item={item} index={i} key={i} handleChange={handleChange} deleteItem={handleDelete} />})}
        </ScrollView>
        <View style={styles.row}>
            {isAddItemEnabled?<Button round onPress={addItem} disabled={!isAddItemEnabled}>Add Item</Button>:
        <ActivityIndicator size="large" color="red"/>}
        {allCorrect?<Button round onPress={calculate} disabled={!isAddItemEnabled}>Calculate</Button>:<></>}
        </View>
        
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
    },
    title:{
        borderWidth:0,
        width:70
    },
    input:{
        height:35,
        width:100,
        marginRight:10,
    },
    input1:{
        height:35,
        width:50,
        marginRight:10
    },
});
export default ItemCard;