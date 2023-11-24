import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";



const RegisterBtn = ({onPress, text}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnContainer}><Text style={styles.title}>{text}</Text></TouchableOpacity>
    );
    
}

export default RegisterBtn;

const styles = StyleSheet.create({
    // ...
    btnContainer: {
        backgroundColor: 'transparent',
        boderColor: 'rgba(37, 90, 19, 1)',
        borderWidth: 1,
        borderRadius: 90,
        paddingVertical: 0,
        paddingHorizontal: 75,
        marginBottom: 10,
        width: '75%',
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