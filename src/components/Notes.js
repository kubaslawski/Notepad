import React, {useEffect, useState} from 'react'
//COMPONENTS
import Note from '../components/Note';
//REDUX
import {setNotes} from '../redux/actions/dataActions';
import { connect } from 'react-redux'
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const Notes = ({setNotes, data}) => {

    useEffect(() => {
        setNotes();
    }, [])


    const [filter, setFilters] = useState("")

    const handleChange = event => {
        setFilters(event.target.value)
    }

    const handleSubmit = () => {
        setNotes();
    }

    let notes = data.notes;

    return (
        <>
        <div className="notes-div">
            <Button
            className="notes-button"
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
            >
                Get all notes
            </Button>
            <TextField
                id="filter"
                name="filter"
                label="Search notes"
                variant="outlined"
                value={filter}
                className="notes-textfield"
                onChange={handleChange}
            />
        </div>
        <Grid container className="container">
        {notes.filter(note => {
            if(!filter) return true;
            if(note.title.toLowerCase().includes(filter.toLowerCase()) || note.description.toLowerCase().includes(filter.toLowerCase()) || note.tags.includes(filter)){
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
