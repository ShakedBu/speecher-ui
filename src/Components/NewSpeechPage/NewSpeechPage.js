import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { KeyboardDatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
}));

function NewSpeechPage(props) {
    const classes = useStyles();
    const [speech, setNewSpeech] = useState(null);

    const addSpeech = () => {
        props.handleClose();
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
                        <TextField id="standard-basic" label="Speech Title" inputProps={{ value: speech && speech.name }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="Speaker" inputProps={{ value: speech && speech.speaker }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="Location" inputProps={{ value: speech && speech.location }} />
                    </Grid>
                    {/* <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date"
                        value={speech && speech.date}
                        // onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    /> */}
                    <Grid item xs={12}>
                        <Button variant="contained" component="label">
                            Upload File
                        <input accept=".txt" type="file" />
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => { addSpeech(); }} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewSpeechPage;