import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function HyperLink (props) {
    return (
        <View style={styles.container}>
            <Text style={{
                color: props.textColor,
                textDecorationLine: 'underline',
                fontSize: 16,
                textAlign: 'right',
                }}
            >{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%',

    },

});