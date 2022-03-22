import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import { writeNote } from '../utils/myfs';

export const CreateNote = () => {
    const _tin = { min: 1, max: 10, format: '.txt' }; // min, max title size
    const [ title, titleChange ] = React.useState('');
    const [ content, contentChange ] = React.useState('');

    const save = () => new Promise((res, rej) => {
        if (_tin.min <= title.length <= _tin.max ) {
            // save content
            writeNote(title, content, _tin.format)
                .then(() => {
                    console.log('success write note')
                    
                })
                .catch(() => console.log('failed write note'));
        } else {
            // handle bad topic
            console.log('bad note');
            console.log({ _tin, title, content });
        }
    });

    return (<View>
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
        <Button title='Save' onPress={() => save()}/>
    </View>);
};

const styles = StyleSheet.create({
    tinput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    tarea: {
        height: 160,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})

export default CreateNote;