import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";


const HeaderText = (props) => {
    return (
      <View><Text style={[props.style, { color: props.textColor }]}>{props.text}</Text></View>
  
    );
  }
  

  export default HeaderText;
  
 