import CreateNote from './create-note';
import Home from './home';
import MyNotes from './mynotes';
import NoteEditor from './note-editor';

export const screenkeys = [
    'home',
    'mynotes',
    'note-editor',
    'create-note',
];

export const screencomponents = [
    Home,
    MyNotes,
    NoteEditor,
    CreateNote
];

export default screenkeys.map((skey, i) => {
    const screen = {
        key: skey,
        component: screencomponents[i]
    };
    return screen;
})