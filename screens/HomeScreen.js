import { StyleSheet, Text, View, Pressable, Image, Alert, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Products from '../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../ProductReducer';

const HomeScreen = () => {
    const cart = useSelector((state) => state.cart.cart);
    console.log('cart',cart);
    const [displayCurrentAddress, setdisplayCurrentAddress] = useState("We are loading your lcation");
    const [loctionServicesEnabled, setlocationServicesEnabled] = useState(false);
   useEffect(()=>{
    checkIfLocationEnabled();
    getCurrentLocation();
   },[])
   const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if(!enabled){
        Alert.alert('Location services not enabled', 'Please enable the location services', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    } else {
        setlocationServicesEnabled(enabled);
    }
   }
   const getCurrentLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
            const foregroundPermissionStatus = await Location.getForegroundPermissionsAsync();
            Alert.alert('Permission Allowed', 'Allow the app to use the location services', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        } else {
            throw new Error('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
    
        // Use reverse geocoding to get the address
        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        if (response.length > 0) {
            // setdisplayCurrentAddress(response[0].city + ', ' + response[0].region);
            for(let item of response){
                let address = `${item.name} ${item.city} ${item.country}`;
                setdisplayCurrentAddress(address);
            }
        }
   }
   const product = useSelector((state) => state.product.product);
   const dispatch = useDispatch();
   useEffect(()=>{
    if(product.length> 0) return;
    const fetchProducts = () => {
      services.map((service)=> dispatch(getProducts(service)));
    };
    fetchProducts();
   },[0]);
   console.log('Product List', product)
   const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];
  return (
    <ScrollView style={{backgroundColor:"#F0F0F0",flex:1, marginTop:50}}>
        {/* Location and Profile */}
        <View style={{ flexDirection:"row", alignItems:"center", padding: 10}}>
            <MaterialIcons name="location-on" size={30} color="#fd5c63" />
            <View>
                <Text style={{ fontSize: 18, fontWeight: "600"}}>Home</Text>
                <Text>{displayCurrentAddress}</Text>
            </View>
            <Pressable style={{marginLeft: "auto", marginRight: 7}}>
                <Image 
                    style={{ width: 40, height: 40, borderRadius: 25}}
                    source={{
                        uri: "https://yt3.ggpht.com/yti/AHXOFjXCq1cOuwi4bbz_GznsswyjBnWh5UfOeNyv8aP5tg=s88-c-k-c0x00ffffff-no-rj-mo"
                    }} />
            </Pressable>
        </View>
      {/* Search Bar  */}
      <View style={{padding:10, margin:10, flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderWidth:0.8, borderColor:"#C0C0C0", borderRadius:8}}>
        <TextInput placeholder='Search for items or More..'/>
        <Feather name="search" size={24} color="#fd5c63" />
      </View>
      {/* Image Carousel  */}
      <Carousel />

      {/* Services Components  */}
      <Services />

      {/* Products List  */}
      {product.map((item, index)=>(
        <Products item={item} key={index} />
      ))}
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})