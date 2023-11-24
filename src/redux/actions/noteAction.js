export const ADD_NOTE = 'Add Note';

export const DELETE_NOTE = 'Delete Note';

// Action Creators
export const addNote = (text) => ({ text, type: ADD_NOTE });
export const deleteNote = (text) => ({ text, type: DELETE_NOTE });
