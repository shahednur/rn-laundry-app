import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';
// import {PropTypes} from 'deprecated-react-native-prop-types';

const Carousel = () => {
    const images =[
        "https://images.unsplash.com/photo-1569442130407-8d2d49e741db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    ]
  return (
    <View>
      <SliderBox  images={images} autoPlay circleLoop dotColor={"#13274f"} inactiveDotColor="#90A4AE" ImageComponentStyle={{ borderRadius: 6, width: "94%",}} />
    </View>
  )
}

export default Carousel



const styles = StyleSheet.create({

});