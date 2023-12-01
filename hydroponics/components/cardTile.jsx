import React from "react";
import { StyleSheet, View } from "react-native";

export default function CardTile(props) {
    return (
        <View style={props.style}>
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

    }
})