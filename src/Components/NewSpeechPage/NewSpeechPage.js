import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { addSpeech } from '../../Utils/SpeechUtil';

const useStyles = makeStyles((theme) => ({
}));

function NewSpeechPage(props) {
    const classes = useStyles();
    const [speech, setNewSpeech] = useState({});

    const createSpeech = () => {
        addSpeech(speech).then((response) => {
            alert("Speech Added :)");
            props.handleClose();
        });
    };

    return (
        <Dialog
            open={props.open}
            onClose={() => props.handleClose()}
            aria-labelledby="customized-dialog-title">
            <DialogTitle id="draggable-dialog-title">New Speech</DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <TextField
                            label="Speech Title"
                            value={speech?.name}
                            onChange={(event) => {
                                let newSpeech = { ...speech };
                                newSpeech.name = event.target.value
                                setNewSpeech(newSpeech);
                            }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Speaker"
                            value={speech?.speaker}
                            onChange={(event) => {
                                let newSpeech = { ...speech };
                                newSpeech.speaker = event.target.value
                                setNewSpeech(newSpeech);
                            }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Location"
                            value={speech?.location}
                            onChange={(event) => {
                                let newSpeech = { ...speech };
                                newSpeech.location = event.target.value
                                setNewSpeech(newSpeech);
                            }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={speech?.date}
                            onChange={(event) => {
                                let newSpeech = { ...speech };
                                newSpeech.date = event.target.value
                                setNewSpeech(newSpeech);
                            }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" component="label">
                            Upload File
                        <input accept=".txt"
                                type="file"
                                onChange={(event) => {
                                    let newSpeech = { ...speech };
                                    newSpeech.file = 'C:\\Users\\buchs\\OneDrive\\Documents\\Studies\\סדנה בבסיסי נתונים\\Speeches\\' + event.target.files[0].name;
                                    setNewSpeech(newSpeech);
                                }} />
                        </Button>
                        * Files are taken only from 'C:\Users\buchs\OneDrive\Documents\Studies\סדנה בבסיסי נתונים\Speeches\'
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => { createSpeech(); }} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewSpeechPage;