import { TestScheduler } from 'jest';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { listNotes } from '../utils/myfs';

export const MyNotes = ({ navigation }) => {

    const [ notes, setNotes ] = React.useState([]);

    React.useEffect(() => {
        let isSubscribed = true;
        listNotes().then((_notes) => {
            console.log({_notes});
            if (isSubscribed) {
                setNotes(_notes)
            }
        });
        return () => isSubscribed = false;
    }, []);

    const openEditor = (note) => {
        console.log(`open note: ${note}`);
        navigation.navigate('note-editor', { filename: note });
    }

    return (<View>
        <Text style={styles.head} >my-notes</Text>
        {
            notes.map((note, i) => (<View style={styles.butn} key={`note-${i}`}>
                <Button  color="black"  title={note} onPress={() => openEditor(note)}></Button>
            </View>))
        }
        </View>);
}


const styles = StyleSheet.create({
        head: {
            color: 'black',
            textAlign: 'center',
            fontSize: 20,
            padding: 20,
        },
        butn: {
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,

        },
   });


 
 

export default MyNotes;