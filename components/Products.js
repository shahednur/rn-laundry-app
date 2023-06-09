import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const Products = ({item}) => {
  return (
    <View>
        <Pressable 
            style={{
                padding:10, 
                backgroundColor:"#F8F8F8", 
                borderRadius:8,
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                margin:14
            }}
            >
            <View>
                <Image source={{uri:item.image}} style={{width:70, height:70}}/>
            </View>
            <View>
                <Text 
                    style={{
                        width: 83, 
                        fontSize: 17, 
                        fontWeight: "500",
                        marginBottom: 7
                    }}>
                    {item.name}
                </Text>
                <Text style={{width: 60, color: "gray", fontSize:15}}>$ {item.price}</Text>
            </View>
            <Pressable style={{width: 80}}>
                <Text 
                    style={{ 
                        borderColor: "gray", 
                        borderWidth: 0.8, 
                        marginVertical: 10,
                        color: "#088F8F",
                        textAlign: "center",
                        padding: 5,
                        borderRadius:4,
                        fontSize: 17,
                        fontWeight: "bold"
                    }}>
                    Add
                </Text>
            </Pressable>
      </Pressable>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({});