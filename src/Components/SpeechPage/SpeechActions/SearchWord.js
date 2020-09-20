import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import { searchWordInSpeech } from '../../../Utils/SpeechUtil';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: '10px auto',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

function SearchWord(props) {
    const classes = useStyles();

    const [word, setWord] = useState("");
    const [results, setResults] = useState(null);

    return (
        <div role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}>
            <Paper className={classes.root} elevation={3}>
                <InputBase
                    className={classes.input}
                    placeholder="Search..."
                    value={word}
                    onChange={(event) => setWord(event.target.value)}
                />
                <Button type="search" className={classes.iconButton} aria-label="search" onClick={(event) => searchWordInSpeech(props.speech.speech_id, word)}>
                    <SearchIcon />
                </Button>
            </Paper>
            <Divider variant="middle" />
        </div>
    )
}

export default SearchWord;