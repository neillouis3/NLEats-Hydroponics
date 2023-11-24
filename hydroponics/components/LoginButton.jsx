import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

const LoginButton = () => {
    return (
        <View>
            <Text style={styles.title}>Login</Text>
        </View>
    );
    
}

export default LoginButton;

const styles = StyleSheet.create({  
    title: {  
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 10,
        textAlign: 'center',
        margin: 10,
    },
});