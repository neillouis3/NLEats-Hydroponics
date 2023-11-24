import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text style={[props.style, { backgroundColor: 'transparent' }]}>{props.text}</Text>}>
      <LinearGradient
        colors={['red', 'blue']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={[props.style, { opacity: 0 }]}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}

export default GradientText;