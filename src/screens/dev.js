import React from 'react';
import { View, Text, Button, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import { } from '../utils/myfs';

export const Dev  = ({ count }) => {
    return (<View>
        <Text style={styles.text}>DEV</Text>
        <Text style={styles.text}>Count: {count}</Text>
    </View>);
}

const styles = StyleSheet.create({
    text: {
        textAlign:'center',
        color: 'black',
        fontSize: 20,
        paddingTop: 20,

    },
});


export default Dev;