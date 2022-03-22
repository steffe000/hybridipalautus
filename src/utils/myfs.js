// All functions on this page returns Promise of some kind
// Promises are something that happens after a while
// it is non-blocking operation
// when the promise is completed, we can handle operation by using promise methods
// .then method happens when promise is resolved (success)
// .catch method happens if promise is rejected (error)
// .finally method can be chained, less used

import RNFS from 'react-native-fs';

const subDir = '/notes/';

export const initPath = () => new Promise((res) => {
    RNFS.mkdir(getPath()).finally(() => res());
});

// exeption, not a promise
export const getPath = () => {
    // if (Platform.OS === 'android') return RNFS.DocumentDirectoryPath + subDir
    // else if (Platform.OS === 'ios') return RNFS.MainBundlePath + subDir
    if (Platform.OS === 'android') return RNFS.ExternalStorageDirectoryPath + subDir
    else if (Platform.OS === 'ios') return RNFS.MainBundlePath + subDir
}

export const writeNote = (title, note, format='.txt') => {
    return new Promise((res, rej) => {
        const notepath = title.includes(format) ?
            getPath() + title :
            getPath() + title + format;
        console.log({title, note, format, notepath});
        RNFS.writeFile(notepath, note)
            .then(() => res())
            .catch((err) => {
                console.log('error at writeFile');
                console.log({err});
                rej();
            });
    });
};

export const readNote = (filename) => new Promise((res, rej) => {
    const filepath = getPath() + filename;
    RNFS.readFile(filepath)
        .then((fileContent) => res(fileContent))
        .catch((err) => {
            console.log('error reading file');
            console.log({err});
        });
});

export const listNotes = (format='.txt') => new Promise((res, rej) => {
    RNFS.readDir(getPath())
        .then((items) => {
            console.log({items});
            const notesOnly = [];
            for (const item of items) {
                if (item.isFile() && item.name.split(format)) notesOnly.push(item.name);
            }
            res(notesOnly);
        })
        .catch((err) => {
            console.log('list note, readDir err:');
            console.log({err});
            initPath();
            res([]);
        });
});