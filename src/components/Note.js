import React from 'react'
import { connect } from 'react-redux'
import {deleteNote, setNotesByHash} from '../redux/actions/dataActions';
//
import remove from '../icons/remove.svg';
//
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const Note = (props) => {

    const {title, description, tags} = props.note; 
    const {deleteNote, setNotesByHash} = props;
    
    const handleDelete = () => {
        deleteNote(props.note);
    }

    const handleHash = event => {
        let hash = event.target.innerHTML.substring(1);
        setNotesByHash(hash)
    }

    return (
        <Grid item xs={2}>
            <Card variant="outlined" className="note-card">
                <CardContent>
                    <img src={remove} alt="remove" className="note-card__icon" onClick={handleDelete}/>
                    <p>{title}</p>
                    <p>{description}</p>
                    {tags && tags.length > 0 ? (
                        tags.map((tag => {
                            return (
                                <span onClick={handleHash} value={tag} className="note-card__tag">#{tag.trim()} </span>
                            )
                        }))
                    ) : (
                        null
                    )}
                </CardContent>
                <CardActions className="note-card__actions">
                </CardActions>
            </Card>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapDispatchToProps = {
    deleteNote,
    setNotesByHash
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
