import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { addSpeech } from '../../Utils/SpeechUtil';

function NewSpeechPage(props) {
    const { enqueueSnackbar } = useSnackbar();

    const [speech, setNewSpeech] = useState({});
    const [loading, setLoading] = useState(false);

    const folder = process.env.REACT_APP_FOLDER || 'C:\\Users\\buchs\\OneDrive\\Documents\\Studies\\סדנה בבסיסי נתונים\\Speeches\\';

    const createSpeech = () => {
        setLoading(true);
        addSpeech(speech).then((response) => {
            setLoading(false);

            if (response?.error) {
                enqueueSnackbar(response.error.data?.message, {
                    variant: 'error',
                });
            }
            else {
                enqueueSnackbar('Speech ' + speech.name + ' Created!', {
                    variant: 'success',
                });
                props.handleClose();
                setNewSpeech({});
            }
        });
    };

    return (
        <Dialog open={props.open} onClose={(e) => props.handleClose()}>
            <DialogTitle>New Speech</DialogTitle>
            {loading ? <LinearProgress in={loading} /> : <></>}
            <DialogContent dividers>
                <form enctype='multipart/form-data'>
                    <Grid container spacing={3}>
                        <Grid item xs={10}>
                            <TextField
                                required
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
                                <input required
                                    accept=".txt"
                                    type="file"
                                    onChange={(event) => {
                                        let newSpeech = { ...speech };
                                        newSpeech.file = folder + event.target.files[0].name;
                                        setNewSpeech(newSpeech);
                                    }}
                                />
                            </Button>
                            <p>* Files are Uploaded from '{folder}'</p>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
                <Button disabled={!speech?.name || !speech?.file} autoFocus onClick={() => { createSpeech(); }} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewSpeechPage;