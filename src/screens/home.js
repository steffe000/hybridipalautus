import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { screenkeys } from './_index';

export const Home = ({ navigation }) => {
    return (<View style={styles.main}>
        <Text style={styles.header}>NOTE APP</Text>
        { screenkeys.map((skey) => skey !== 'home' && <View style={styles.btn} key={"home-"+skey}>
                <Button color="black" style={styles.btn} title={skey} onPress={() => navigation.navigate(skey)}/>
            </View>
        )}
    </View>);
};

const styles = StyleSheet.create({
    main: {
        
    },
    btn: {
        marginTop: 16,
        marginLeft: 40,
        marginRight: 40,
        
    },
    header: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
    },
})

export default Home;