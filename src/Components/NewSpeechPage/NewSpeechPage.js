import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
}));

function NewSpeechPage(props) {
    const classes = useStyles();
    const [speech, setNewSpeech] = useState(null);

    return (
        <Dialog
            open={props.open}
            onClose={() => props.handleClose()}
            aria-labelledby="customized-dialog-title">
            <DialogTitle id="draggable-dialog-title">New Speech</DialogTitle>
            <DialogContent dividers>
                <form>
                    <TextField id="standard-basic" label="Speech Title" inputProps={{ value: speech && speech.name }} />
                    <TextField id="standard-basic" label="Speaker" inputProps={{ value: speech && speech.speaker }} />
                    <TextField id="standard-basic" label="Location" inputProps={{ value: speech && speech.location }} />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date"
                        value={speech && speech.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => { setNewSpeech(); props.handleClose(); }} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewSpeechPage;