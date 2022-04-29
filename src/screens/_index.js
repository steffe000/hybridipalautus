import CreateNote from './create-note';
import Home from './home';
import MyNotes from './mynotes';
import NoteEditor from './note-editor';
import Dev from './dev';
import { Settings } from './settings';

export const screenkeys = [
    'home',
    'mynotes',
    'note-editor',
    'create-note',
    'dev',
    'settings'
];

export const screencomponents = [
    Home,
    MyNotes,
    NoteEditor,
    CreateNote,
    Dev,
    Settings
];

export default screenkeys.map((skey, i) => {
    const screen = {
        key: skey,
        component: screencomponents[i]
    };
    return screen;
})