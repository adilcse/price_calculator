import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import ItemCard from "../elements/ItemCard";
import ItemDetails from "../elements/ItemDetailsCard";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import UnitPriceCard from "../elements/UnitPriceCard";
const initialItem=[
    {
        id:1,
        name:"Item 1",
        piece:"",
        details:"",
        pieceError:true,
        detailError:true
    }
];
const DetailsScreen = (props) => {
    const [items,setItems]=useState(initialItem);
    const [itemsCost,setItemsCost]=useState([]);
    const [isAddItemEnabled,setAddItemEnabled]=useState(true);
    const [extraData,setExtraData]=useState({});
    const [allCorrect,setAllCorrect]=useState(false);
    const scrollRef = useRef();
    const totalCost = parseFloat(props.route.params.cost);
    const calculateCost=(index,data)=>{
        let length = 1;
        const newItems=[...items];
        newItems[index].detailError=false;
        newItems[index].pieceError=false;
        data.details.split(",").forEach(el=>{
            const num = parseFloat(el);
            if(!isNaN(num)) {
                length *=num;
            } else {
                length=null;
                newItems[index].detailError=true;
            }
        });
        if(length){
            newItems[index].clothLength = length;
        }
        if(isNaN(parseInt(data.piece))){
            newItems[index].pieceError=true;
        }
        setItems(newItems);       
    }
    const handleChange=(index,text,type)=>{
        const newItems=[...items];
        newItems[index][type] = text;
        setItems(newItems);
        calculateCost(index,newItems[index])
     }
     const handleDelete=(id)=>{
        setItems(prev=>prev.filter((_, i) => i !== id));
        setItemsCost([]);
        setExtraData({})
     } 
     useEffect(()=>{
         setTimeout(()=>{
             setAddItemEnabled(true)
         },1000);
        items.length === 0 || items.find(item=>item.detailError || item.pieceError)?setAllCorrect(false):setAllCorrect(true);
     },[items])
     const addItem=()=>{
         setAddItemEnabled(false);
         setItems(prev=>[...prev,{   
             id:prev.length+1,
             name:"Item "+(prev.length+1),
             piece:"",
             details:"",
             pieceError:true,
             detailError:true
            }]);
              scrollRef.current.scrollToEnd();
         }
    const calculate=()=>{
        if(items.length > 0){
        let total=items.reduce((prev,item)=>{
        return prev+item.clothLength;
        },0);
        const ppu = totalCost / total;
        setExtraData({total:total,ppu:ppu});
        setItemsCost(()=>items.map(item=>{
                    return {
                        name:item.name,
                        cost:(ppu * (item.clothLength/parseFloat(item.piece))).toFixed(2)
                    }
                })
            );
        }
    }
return(
    <ScrollView style={styles.container}>
        <View style={styles.mainContaier}>
            <Text style={styles.heading}>Cost of the Roll  </Text>
            <FontAwesome name="rupee" size={16} color="black" style={styles.icon} />
            <Text style={styles.h1}> {props.route.params.cost.toFixed(2)} </Text>
        </View>
        <ItemCard 
            items={items}
            handleChange={handleChange} 
            handleDelete={handleDelete} 
            addItem={addItem}
            isAddItemEnabled={isAddItemEnabled}
            scrollRef={scrollRef}
            allCorrect={allCorrect}
            calculate={calculate}/>
            {extraData.total?<UnitPriceCard total={extraData.total} ppu={extraData.ppu}/>:<></>}
            {itemsCost.map((el,i)=><ItemDetails item={el} key={i}/>)}
        
    </ScrollView>
)
}
const styles=StyleSheet.create({
   container:{ 
        flex: 1,
        backgroundColor:"white"
    },
    heading:{
        fontSize:18,
        textTransform:"uppercase",
        justifyContent:"center",
        textAlign:"center",
        
    },
    h1:{
        fontSize:20,
        fontWeight:"bold",
        color:"black"
    },
    mainContaier:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        marginTop:20
    },
})
export default DetailsScreen;