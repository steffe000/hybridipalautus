import React from 'react';
import { View, Text, Button } from 'react-native';
import { listNotes } from '../utils/myfs';

export const MyNotes = ({ navigation }) => {
    const [ notes, setNotes ] = React.useState([]);
    // useEffect = componentDidMount
    // useEffect = componentDidUpdate
    // componentDidUpdate => have to avoid infinite loop
    // 2nd param (deps = []), restricts didUpdate
    // when variables in deps are changed, it causes re-render
    // return inside useEffect => componentUnmounts
    React.useEffect(() => {
        let isSubscribed = true;
        listNotes().then((_notes) => {
            console.log({_notes})
            if (isSubscribed) {
                setNotes(_notes);
            }
        });
        return () => isSubscribed = false;
    }, []);

    const openEditor = (note) => {
        console.log(note);
        navigation.navigate('note-editor', { filename: note });
    }

    return (<View>
        <Text>mynotes1</Text>
        { 
            notes && notes.map((note, i) => (<View key={`note-${i}`}>
                <Button title={note} onPress={() => openEditor(note)}/>
            </View>))
        }
    </View>);
};

export default MyNotes;