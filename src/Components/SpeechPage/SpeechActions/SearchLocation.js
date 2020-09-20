import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { getByLocation } from '../../../Utils/SpeechUtil';

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

    const [paragraph, setParagraph] = useState(0);
    const [sentence, setSentence] = useState(0);
    const [word, setWord] = useState(0);

    return (
        <div role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}>
            <Paper className={classes.root} elevation={3}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-number"
                            label="Paragraph"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            value={paragraph}
                            onChange={(event) => {setParagraph(event.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-number"
                            label="Sentence"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            value={sentence}
                            onChange={(event) => {setSentence(event.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-number"
                            label="Word"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            value={word}
                            onChange={(event) => {setWord(event.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="search" className={classes.iconButton} aria-label="search" onClick={(event) => getByLocation(props.speech.speech_id)}>
                            <SearchIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default SearchLocation;