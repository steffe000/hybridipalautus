import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { writeNote } from '../utils/myfs';

export const CreateNote = () => {
    const _tin = { min: 1, max: 10, format: '.txt' }; 
    const [ title, titleChange ] = React.useState('');
    const [ content, contentChange ] = React.useState('');

    const save = () => {
        if (_tin.min <= title.length <= _tin.max) {
            writeNote(title, content, _tin.format)
                .then(() => console.log('success write note'))
                .catch(() => console.log('failed write note'));
        } else {
            // handle bad topic
            console.log('bad topic');
            console.log({title, _tin});
        }
    };

    return (<View>
        <Text style={styles.text}>CREATE NOTES</Text>
        <TextInput
            style={styles.tinput}
            onChangeText={titleChange}
            value={title}
            placeholder='title here'
        />
        <TextInput
            style={styles.tarea}
            onChangeText={contentChange}
            value={content}
            placeholder='content here'
            multiline={true}
        />
        <Button color="black" style={styles.nappi} title='Save' onPress={() => save()} />
    </View>);
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 10,
        color:'black',
        textAlign: 'center',
        fontSize: 20,
    },
    
    tarea: {
        height: 160,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    tinput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },

});

export default CreateNote;