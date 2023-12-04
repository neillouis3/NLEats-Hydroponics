import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, Pressable } from "react-native";
import color from "../constants/color";


const LoginBtn = ({onPress, text, google}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={google ? styles.btnContainer2 : styles.btnContainer}
        >
            <Text 
                style={google ? styles.title2 : styles.title}
            >{text}</Text>
        </Pressable>
    );
    
}

export default LoginBtn;

const styles = StyleSheet.create({
    // ...
    btnContainer: {
        backgroundColor: color.darkGreen,
        borderRadius: 90,
        paddingVertical: 0,
        paddingHorizontal: 75,

        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },

    btnContainer2: {
        backgroundColor: 'transparent',
        borderRadius: 90,
        paddingVertical: 0,
        paddingHorizontal: 75,

        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color.darkGreen,
        borderWidth: 1,

    },
    title: {
        fontSize: 20,

        color: 'white',
        backgroundColor: 'transparent',
    
        margin: 0,
        textAlign: 'center',

    },

    title2: {
        fontSize: 20,

        color: color.darkGreen,
        backgroundColor: 'transparent',
    
        margin: 0,
        textAlign: 'center',

    },

  });