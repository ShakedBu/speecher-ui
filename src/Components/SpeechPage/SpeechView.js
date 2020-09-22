import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
}));

function SpeechView(props) {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h2" component="h3">{props.speech?.name}</Typography>
            <Typography variant="h5" component="h6">{props.speech?.speaker + " | " + props.speech?.location + " | " + props.speech?.date}</Typography>
            <Paper style={{ maxHeight: 800, overflow: 'auto', textAlign: 'left' }} >
                {props.speech?.full_text.split('\n\n').map((x) => <><div>{x}</div><br /></>)}
            </Paper>
        </>
    );
}

export default SpeechView;
