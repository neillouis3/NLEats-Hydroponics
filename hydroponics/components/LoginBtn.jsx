import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, Pressable } from "react-native";
import color from "../constants/color";


const LoginBtn = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={styles.btnContainer}><Text style={styles.title}>{text}</Text></Pressable>
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
        marginBottom: 10,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
    
        margin: 0,
        textAlign: 'center',

    },

  });