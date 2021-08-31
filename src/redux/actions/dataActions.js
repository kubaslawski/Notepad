import { SET_NOTES, ADD_NOTE, DELETE_NOTE } from "../types";

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


// export const setCars = () => dispatch => {
//     axios.get('http://localhost:3002/offers')
//         .then((res => {
//             dispatch({
//                 type: SET_CARS,
//                 payload: res.data
//             })
//         }))
//         .catch(err => console.error(err))
// }

// export const editCarStatus = offer => dispatch => {
//     axios.put(`http://localhost:3002/offers/${offer.id}`, {
//         ...offer,
//         availability: offer.availability === true ? false : true
//     })
//     .catch(err => console.log(err))
//     dispatch({
//         type: CHANGE_AVAILABILITY,
//         payload: offer.id
//     })
// }

// export const deleteCar = id => dispatch => {
//     dispatch({
//         type: DELETE_CAR,
//         payload: id
//     })
// }