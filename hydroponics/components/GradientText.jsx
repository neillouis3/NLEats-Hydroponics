import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import color from "../constants/color";

const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text style={[props.style, { backgroundColor: 'transparent' }]}>{props.text}</Text>}>
      <LinearGradient
        colors={[color.green, color.yellow]}
        start={{ x: 0, y: 2 }}
        end={{ x: 2, y: 0 }}
      >
        <Text style={[props.style, { opacity: 0 }]}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}

export default GradientText;