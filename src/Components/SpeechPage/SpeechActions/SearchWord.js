import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

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

    const searchWord = () => {
        if (word != "") {
            searchWordInSpeech(props.speechId, word).then((response) => {
                setResults(response);
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchWord();
    };

    return (
        <div role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}>
            <Paper className={classes.root} elevation={3}>
                <form onSubmit={handleSubmit}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search..."
                        value={word}
                        onChange={(event) => setWord(event.target.value)}
                    />
                    <Button type="search" className={classes.iconButton} aria-label="search" onClick={(event) => searchWord()}>
                        <SearchIcon />
                    </Button>
                </form>
            </Paper>
            <Divider variant="middle" />
            <List>
                {
                    results?.map(x =>
                        //<Link key={x.id} to={"/speech/" + x.id}>
                        <ListItem>
                            <ListItemText
                                primary={'paragraph: ' + x.paragraph + ' sentence: ' + x.sentence + ' index:' + x.index}
                                secondary={
                                    <React.Fragment>
                                        {(() => {
                                            // Bold the searched word in the returned text
                                            let originalWords = x.some_sentence.match(new RegExp(word, 'ig'));
                                            let text = x.some_sentence.split(new RegExp(word, 'i'));

                                            return (text.map((x, idx) => idx !== text.length - 1 ?
                                                <React.Fragment key={idx} >
                                                    <span>{x}</span>
                                                    <b>{originalWords[idx]}</b>
                                                </React.Fragment>
                                                :
                                                <span key={idx} >{x}</span>))
                                        })()}
                                    </React.Fragment>
                                } />
                        </ListItem>
                        // </Link>)
                    )}
            </List>
        </div>
    )
}

export default SearchWord;