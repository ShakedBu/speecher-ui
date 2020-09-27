import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import SearchIcon from "@material-ui/icons/Search";

import SpeechCounts from './SpeechCounts';

import { getByLocation, getCountsBySpeech } from '../../../../Utils/SpeechUtil';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: '10px auto',
    },
}));

function SearchLocation(props) {
    const classes = useStyles();

    const [word, setWord] = useState(1);
    const [compCounts, setCompCount] = useState(null);
    const [result, setResult] = useState(null);

    const loadCounts = () => {
        getCountsBySpeech(props.speechId).then((response) => {
            setCompCount(response);
        })
    }

    const searchWordByLocation = (location) => {
        getByLocation(props.speechId, location.paragraph, location.sentence, location.word).then((response) => {
            setResult(response)
            setWord(location.word);
            props.setLocatedWord(location.paragraph, location.sentence, location.word);
        })
    }

    if (compCounts == null && props.speechId != null) {
        loadCounts();
    }

    return (
        <div role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}>
            <Paper className={classes.root} elevation={3}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <SpeechCounts speechId={props.speechId} sendLocation={searchWordByLocation} />
                    </Grid>
                </Grid>
            </Paper>
            <Divider variant="middle" />
            <Paper>
                {result == null ?
                    <></>
                    :
                    <p>
                        {(() => {
                            // Bold the searched word in the returned text
                            let text = result.full_sentence.split(' ');

                            return text.map((x, indx) =>
                                indx !== word ?
                                    <span key={indx}>{x} </span>
                                    :
                                    <b key={indx}>{x} </b>

                            )
                        })()}
                    </p>
                }
            </Paper>
        </div>
    )
}

export default SearchLocation;