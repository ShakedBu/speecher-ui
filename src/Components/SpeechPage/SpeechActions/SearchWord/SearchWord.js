import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import WordList from './WordsList';

import { searchWordInSpeech } from '../../../../Utils/SpeechUtil';

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

    const [wordsList, setWordList] = useState(null);
    const [word, setWord] = useState("");
    const [query, setQuery] = useState(word)
    const [results, setResults] = useState(null);

    const searchWord = () => {
        setQuery(word)
        if (query !== "") {
            searchWordInSpeech(props.speechId, query).then((response) => {
                setResults(response);
                props.setSearchedWord(query);
            })
        }
    }

    const changeWordList = (words) => {
        setWordList(words);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchWord();
    };

    const navigateToWord = (index) => {
        props.setMarkedWord(index);
    }

    return (
        <div role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.root} elevation={3}>
                        <Grid container spacing={2}>
                            <WordList speechId={props.speechId} words={wordsList} setWordsList={changeWordList} />
                            <Grid item xs={12}>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            <Autocomplete
                                                options={wordsList}
                                                getOptionLabel={(option) => option.word}
                                                onChange={(event, newValue) => {
                                                    setWord(newValue?.word);
                                                }}
                                                renderInput={(params) =>
                                                    <TextField {...params}
                                                        label="Search Word"
                                                        type="search"
                                                        required
                                                    />}
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button disabled={!word} type="search" className={classes.iconButton} onClick={(event) => searchWord()}>
                                                <SearchIcon />
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    {results ?
                        <Paper style={{ maxHeight: 585, overflow: 'auto' }} elevation={3}>
                            <List>
                                {results?.map((x, idx) =>
                                    <ListItem key={idx} onClick={(event) => { navigateToWord(idx) }}>
                                        <ListItemText
                                            primary={'paragraph: ' + x.paragraph + ' | sentence: ' + x.sentence + ' | index:' + x.index}
                                            secondary={
                                                <a href={'#' + word + idx}>
                                                    {(() => {
                                                        // Bold the searched word in the returned text
                                                        let originalWords = x.some_sentence.match(new RegExp(query, 'ig'));
                                                        let text = x.some_sentence.split(new RegExp(query, 'i'));

                                                        return (text.map((x, indx) => indx !== text.length - 1 ?
                                                            <React.Fragment key={indx} >
                                                                <span>{x}</span>
                                                                <b>{originalWords[indx]}</b>
                                                            </React.Fragment>
                                                            :
                                                            <span key={indx} >{x}</span>))
                                                    })()}
                                                </a>
                                            } />
                                    </ListItem>)
                                }
                            </List>
                        </Paper>
                        :
                        <></>}
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchWord;