import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import { Redirect } from 'react-router-dom';

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchReaults from './SearchResults';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LinearProgress from '@material-ui/core/LinearProgress';

import NewSpeechPage from '../NewSpeechPage/NewSpeechPage';
import { searchSpeeches } from '../../Utils/SpeechUtil';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        width: 500,
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

function SearchPage(props) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const [query, setQuery] = useState("");
    const [searchedVal, setSearchedVal] = useState(query);
    const [results, setResults] = useState(null);
    const [newSpeechOpen, setNewSpeechOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const openNewSpeech = () => {
        setNewSpeechOpen(true);
    };

    const closeNewSpeech = () => {
        setNewSpeechOpen(false);
    };

    const searchSpeech = (query) => {
        if (query !== "") {
            setQuery(query);
            setLoading(true);
            searchSpeeches(query).then((response) => {
                setLoading(false);
                if (response?.error) {
                    enqueueSnackbar(response.error.data?.message, {
                        variant: 'warning',
                    });
                    setResults(null);
                }
                else
                    setResults(response);
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchSpeech(searchedVal);
    };

    return (
        !props.isLogged ?
            <Redirect to="/login" />
            :
            <>
                <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search..."
                        value={searchedVal}
                        onChange={(event) => setSearchedVal(event.target.value)}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <Button disabled={!searchedVal} type="search" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </Button>
                </Paper>
                {loading ? <LinearProgress in={loading} /> : <Divider variant="middle" />}
                <SearchReaults searchResults={results} query={query} />
                <Fab aria-label='Add' className={classes.fab} color='primary' onClick={(event) => { openNewSpeech() }}>
                    <AddIcon />
                </Fab>
                <NewSpeechPage open={newSpeechOpen} handleClose={closeNewSpeech} />
            </>
    );
}

export default SearchPage;