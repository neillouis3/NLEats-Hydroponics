

import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const GradientText = (props) => {
  return (
    <View> <Text style={styles.text}>{props.text}</Text></View>

  );
}

export default GradientText;

const styles = StyleSheet.create({
    text: {
        color: 'transparent', 
        backgroundClip: 'text', 
        backgroundImage: 'linear-gradient(to right, rgba(173, 197, 25, 1), rgba(37, 90, 19, 1))', 
    },

});
