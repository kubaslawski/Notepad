import React, {useEffect, useState} from 'react'
//COMPONENTS
import Note from '../components/Note';
//REDUX
import {setNotes} from '../redux/actions/dataActions';
import { connect } from 'react-redux'
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export const Notes = ({setNotes, data}) => {

    useEffect(() => {
        setNotes();
    }, [])


    const [filter, setFilters] = useState("")

    const handleChange = event => {
        setFilters(event.target.value)
    }

    const notes = data.notes;

    return (
        <>
        <TextField
            id="filter"
            name="filter"
            label="Note filter"
            variant="outlined"
            value={filter}
            className="addNote-textField"
            onChange={handleChange}
            required={true}
        />
        <Grid container className="container">
        {notes.filter(note => {
            if(!filter) return true;
            if(note.title.toLowerCase().includes(filter.toLowerCase())){
                return true;
            }
            return false;
        })
        .map((el) => {
            return (
                <Note key={el.id} note={el}/>
            )
        })}
        </Grid>
        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapDispatchToProps = {
    setNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
