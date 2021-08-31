import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {addNote} from '../redux/actions/dataActions';
import { TagsInput } from "react-tag-input-component";
//MUI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const AddNote = ({addNote}) => {

    const [data, setData] = useState({
        id: localStorage.length,
        title: "",
        tags: [],
        description: "",
    })


    const handleSubmit = event => {
        event.preventDefault();
        addNote(data);
        setData({
            title: "",
            description: "",
            tags: []
        })
    }


    const handleChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })    
    }

    const handleTaskChange = tags => {
        setData({
            ...data,
            tags: tags
        })
    }

    return (
        <div className="container-addNote__form">
            <p className="p__standard">Add a new note</p>
            <form onSubmit={handleSubmit} noValidate className="addNote-form">
            <TextField
                id="title"
                name="title"
                label="Note title"
                variant="outlined"
                value={data.title}
                className="addNote-textField"
                onChange={handleChange}
                required={true}
            />
            <TextField
                id="description"
                name="description"
                label="Note description"
                variant="outlined"
                value={data.description}
                className="addNote-textField"
                minRows={5}
                onChange={handleChange}
                required={true}
            />
            <TagsInput
                value={data.tags}
                onChange={handleTaskChange}
                name="tags"
                placeHolder="Add tags"
            />
            <Button 
            disabled={data.title === "" || data.description === ""}
            className="addNote-button"
            type="submit">
                Add note
            </Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapDispatchToProps = {
    addNote
}

// export default connect(mapStateToProps, mapDispatchToProps)(addNote)
export default connect(mapStateToProps, mapDispatchToProps)(AddNote);