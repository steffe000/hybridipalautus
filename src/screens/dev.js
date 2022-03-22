import React from 'react';
import { View, Button, PermissionsAndroid, Platform } from 'react-native';
import { getPath } from '../utils/myfs';

export const Dev = () => {
    const isAndroid = Platform.OS === 'android' ? true : false;
    const logPath = () => {
        console.log({path: getPath()});
    };

    const getReadPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: "Read Permission",
                    message: "to external storage",
                    buttonNeutral: "Ask me later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('read permission available');
            } else {
                console.log('read permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    const getWritePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Write Permission",
                    message: "to external storage",
                    buttonNeutral: "Ask me later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('write permission available');
            } else {
                console.log('write permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    return (<View>
        <Button title='path' onPress={logPath} />
        <Button title='readPermission' onPress={getReadPermission} disabled={!isAndroid}/>
        <Button title='writePermission' onPress={getWritePermission} disabled={!isAndroid}/>
    </View>)
};

export default Dev;