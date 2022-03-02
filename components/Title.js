import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Title(props) {
    return (
        <View>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#55efc4",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    }
})

export default Title;