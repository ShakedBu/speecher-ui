import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchReaults from './SearchResults';
import { searchSpeeches } from '../../Utils/SpeechUtil';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NewSpeechPage from '../NewSpeechPage/NewSpeechPage';

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
    fab: {
        position: 'absolute',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
}));

function SearchPage() {
    const classes = useStyles();

    const [query, setQuery] = useState("");
    const [searchedVal, setSearchedVal] = useState(query);
    const [results, setResults] = useState(null);
    const [newSpeechOpen, setNewSpeechOpen] = useState(false);

    const openNewSpeech = () => {
        setNewSpeechOpen(true);
    };

    const closeNewSpeech = () => {
        setNewSpeechOpen(false);
    };

    const searchSpeech = (query) => {
        setQuery(query);
        searchSpeeches(query).then((response) => {
            setResults(response);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchSpeech(query);
    };

    return (
        <>
            <Paper className={classes.root} elevation={3}>
                <form onSubmit={handleSubmit}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search..."
                        value={searchedVal}
                        onChange={(event) => setSearchedVal(event.target.value)}
                    />
                    <Button type="search" className={classes.iconButton} aria-label="search" onClick={() => searchSpeech(searchedVal)}>
                        <SearchIcon />
                    </Button>
                </form>
            </Paper>
            <Divider variant="middle" />
            <SearchReaults searchResults={results} query={query} />
            <Fab aria-label='Add' className={classes.fab} color='primary'>
                <Button aria-label="Add" onClick={(event) => { openNewSpeech() }}>
                    <AddIcon />
                </Button>
            </Fab>
            <NewSpeechPage open={newSpeechOpen} handleClose={closeNewSpeech} />
        </>
    );
}

export default SearchPage;
