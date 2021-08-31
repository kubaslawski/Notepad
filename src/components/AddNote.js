import React, {useState} from 'react'
import { connect } from 'react-redux';
import {addNote} from '../redux/actions/dataActions';
import { TagsInput } from "react-tag-input-component";
//ICONS
import arrowDown from "../icons/arrow-down.svg";
//MUI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const AddNote = ({addNote}) => {

    const [data, setData] = useState({
        id: localStorage.length,
        title: "",
        tags: [],
        description: "",
    });

    const [open, setOpen] = useState(true);


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

    const handleOpen = () => {
        open === true ? setOpen(false) : setOpen(true);
    }

    return (
        <div className="container-addNote__form">
            <p onClick={handleOpen} className="p__standard addNote-p">Add a new note <img className="addNote-icon" src={arrowDown} alt="arrow-down"/> </p>
            <div hidden={open}>
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
                    placeHolder="Add tags (e.g 'work')"
                />
                <Button 
                disabled={data.title === "" || data.description === ""}
                className="addNote-button"
                variant="outlined"
                color="primary"
                type="submit"
                >
                    Add note
                </Button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapDispatchToProps = {
    addNote
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);