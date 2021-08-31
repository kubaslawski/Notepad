/* eslint-disable import/no-anonymous-default-export */
import {
    SET_NOTES,
    ADD_NOTE,
    DELETE_NOTE,
} from '../types';

const initialState = {
    notes: [],
};

let index;
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
        default:
            return state;
    }
}