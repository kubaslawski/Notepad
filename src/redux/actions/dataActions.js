import { SET_NOTES, ADD_NOTE, DELETE_NOTE, SET_NOTES_BY_HASH } from "../types";

export const setNotes = () =>  dispatch => {
    let notes = [];
    Object.keys(localStorage).forEach(function(key){
        notes.push(JSON.parse(localStorage.getItem(key)));
    });
    dispatch({
        type: SET_NOTES,
        payload: notes
    })
}

export const addNote = note => dispatch => {
    localStorage.setItem((localStorage.length+1).toString(), JSON.stringify(note));
    dispatch({
        type: ADD_NOTE, 
        payload: note
    })
}

export const deleteNote = note => dispatch => {
    Object.keys(localStorage).forEach(function(key){
        var item = JSON.parse(localStorage.getItem(key))
        console.log(note.id === item.id)
        if(item.id === note.id){
            localStorage.removeItem(key)
            return;
        }
    });
    dispatch({
        type: DELETE_NOTE,
        payload: note
    })
}

export const setNotesByHash = hash => dispatch => {
    dispatch({
        type: SET_NOTES_BY_HASH,
        payload: hash
    })
}