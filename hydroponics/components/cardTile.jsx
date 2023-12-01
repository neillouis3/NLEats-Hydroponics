import React from "react";
import { StyleSheet, View } from "react-native";

export default function cardTile(props) {
    return (
        <View style={styles.container}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }
})