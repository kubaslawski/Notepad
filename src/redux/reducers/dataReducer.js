/* eslint-disable import/no-anonymous-default-export */
import {
    SET_NOTES,
    ADD_NOTE,
    DELETE_NOTE,
    SET_NOTES_BY_HASH,
} from '../types';

const initialState = {
    notes: [],
};

export default function(state=initialState, action){
    let index;
    switch(action.type){
        case SET_NOTES:
            return {
                ...state,
                notes: action.payload
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    action.payload,
                    ...state.notes
                ]
            }
        case DELETE_NOTE:
            index = state.notes.findIndex(note => note.id = action.payload.id)
            state.notes.splice(index, 1)
            return {
                ...state
            }
        case SET_NOTES_BY_HASH:
            return {
                ...state,
                notes: state.notes.filter((note) => note.tags.includes(action.payload.trim()))
            }
            
        default:
            return state;
    }
}