import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function HyperLink (props: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>props.text</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    text: {

    },
});