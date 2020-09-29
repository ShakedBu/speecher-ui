import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';

import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { searchPhrase } from '../../../Utils/SpeechUtil';
import { getAllPhrases } from '../../../Utils/WordUtils';

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

function SearchPhrase(props) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const [phrases, setPhrases] = useState(null);
    const [selectedPhrase, setSelectePhrase] = useState(null);
    const [results, setResults] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        findPhrase();
    };

    const findPhrase = () => {
        searchPhrase(props.speechId, selectedPhrase.id).then((response) => {
            if (response?.error) {
                enqueueSnackbar(response.error.data?.message, {
                    variant: 'error',
                });
                setResults(null);
            }
            else
                setResults(response)
        });
        props.setSearchedWord(selectedPhrase.text);
    }

    const loadPhrases = () => {
        getAllPhrases().then((response) => setPhrases(response))
    }

    const navigateToWord = (index) => {
        props.setMarkedWord(index);
    }

    if (phrases == null)
        loadPhrases();

    return (
        <div role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}>
            <Paper className={classes.root} elevation={3}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item spacing={2}>
                            <Autocomplete
                                options={phrases}
                                getOptionLabel={(option) => option.text}
                                style={{ width: 300 }}
                                onChange={(event, newValue) => {
                                    setSelectePhrase(newValue);
                                }}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        label="Search Phrase"
                                        type="search"
                                        required
                                    />}
                            />
                        </Grid>
                        <Grid item spacing={2}>
                            <Button disabled={!selectedPhrase} type="search" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Divider variant="middle" />
            {results ?
                <Paper style={{ maxHeight: 680, overflow: 'auto' }} elevation={3}>
                    <List subheader={<ListSubheader>{results.length} results</ListSubheader>} >
                        {results?.map((x, idx) =>
                            <ListItem key={idx} onClick={(event) => { navigateToWord(idx) }}>
                                <ListItemText
                                    primary={
                                        <Typography variant='overline'>
                                            {'paragraph: ' + x.paragraph + ' | sentence: ' + x.sentence + ' | index:' + x.index}
                                        </Typography>}
                                    secondary={
                                        <a href={'#' + selectedPhrase.text.replaceAll(' ', '_') + idx}>
                                            <Typography variant='body2'>
                                                {(() => {
                                                    // Bold the searched word in the returned text
                                                    let originalWords = x.some_sentence.match(new RegExp(selectedPhrase.text, 'ig'));
                                                    let text = x.some_sentence.split(new RegExp(selectedPhrase.text, 'i'));

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
                <></>
            }
        </div>
    )
}

export default SearchPhrase;