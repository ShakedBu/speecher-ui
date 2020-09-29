import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SpeechView from './SpeechView';
import SpeechActionsTabs from './SpeechActions/SpeechActionsTabs';

import { getSpeech } from '../../Utils/SpeechUtil';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function SpeechPage(props) {
    const classes = useStyles();

    const [speech, setSpeech] = useState(null);
    const [markedWord, setMarkedWord] = useState(null);
    const [searchedWord, setSearchedWord] = useState(null);
    const [locatedWord, setLocatedWord] = useState(null);

    // credit to ofir ♥
    var { id: speechId } = useParams();

    const changeMarkedWord = (marked) => {
        setMarkedWord(marked);
        setLocatedWord(null);
    }

    const changeSearchedWord = (searched) => {
        setSearchedWord(searched);
        setLocatedWord(null);
    }

    const changedLocatedWord = (paragraph, sentence, index) => {
        setLocatedWord({ 'paragraph': paragraph, 'sentence': sentence, 'index': index });
    }

    if (speech == null) {
        getSpeech(speechId).then((response) => {
            setSpeech(response);
        })
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <SpeechActionsTabs speechId={speech?.speech_id} setMarkedWord={changeMarkedWord} setSearchedWord={changeSearchedWord} setLocatedWord={changedLocatedWord} />
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper className={classes.paper}>
                    <SpeechView speech={speech} marked={markedWord} searched={searchedWord} located={locatedWord} />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default SpeechPage;
