import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import WordList from './WordsList';

import { searchWordInSpeech } from '../../../../Utils/SpeechUtil';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: '10px auto',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

function SearchWord(props) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const [wordsList, setWordList] = useState(null);
    const [word, setWord] = useState("");
    const [query, setQuery] = useState(word)
    const [results, setResults] = useState(null);

    const searchWord = () => {
        setQuery(word)
        if (word !== "") {
            props.setLoading(true);
            searchWordInSpeech(props.speechId, word).then((response) => {
                props.setLoading(false);
                if (response?.error) {
                    enqueueSnackbar(response.error.data?.message, {
                        variant: 'error',
                    });
                    setResults(null);
                    props.setSearchedWord(null);
                }
                else {
                    setResults(response);
                }
            });
            props.setSearchedWord(word);
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
                                            <Button disabled={!word} type="search" className={classes.iconButton}>
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
                            <List subheader={<ListSubheader>{results.length} results</ListSubheader>} >
                                {results?.map((x, idx) =>
                                    <ListItem key={idx} onClick={(event) => { navigateToWord(idx) }}>
                                        <ListItemText
                                            primary={
                                                <Typography variant='overline'>
                                                    {'paragraph: ' + x.paragraph + ' | sentence: ' + x.sentence + ' | index:' + x.index}
                                                </Typography>}
                                            secondary={
                                                <a href={'#' + word + idx}>
                                                    <Typography variant='body2'>
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
                                                    </Typography>
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