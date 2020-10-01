import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import { getCountsBySpeech } from '../../../../Utils/SpeechUtil';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: '10px auto',
    },
}));

function SpeechCounts(props) {
    const classes = useStyles();

    const [paragraph, setParagraph] = useState(0);
    const [sentence, setSentence] = useState(0);
    const [word, setWord] = useState(0);
    const [compCounts, setCompCount] = useState(null);

    const loadCounts = () => {
        if (props.speechId) {
            getCountsBySpeech(props.speechId).then((response) => setCompCount(response))
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            if (props.speechId) {
                const data = await getCountsBySpeech(props.speechId);
                setCompCount(data);
                setParagraph(0);
                setSentence(0);
                setWord(0);
            }
        }

        fetchData();
    }, [props.speechId]);


    const chnageParagraph = (event) => {
        let selectedParagraph = parseInt(event.target.value);
        if (!compCounts || !selectedParagraph) {
            setParagraph(0);
            return;
        }
        if (0 > selectedParagraph) {
            setParagraph(0)
            return;
        }
        if (selectedParagraph > compCounts.length) {
            setParagraph(compCounts.length)
            return;
        }
        setParagraph(selectedParagraph)
    }

    const chnageSentence = (event) => {
        let selectedSentence = parseInt(event.target.value);
        if (!compCounts || !selectedSentence) {
            setSentence(0);
            return;
        }
        if (0 > selectedSentence) {
            setSentence(0)
            return;
        }
        if (selectedSentence > compCounts[paragraph - 1].sentences.length) {
            setSentence(compCounts[paragraph - 1].sentences.length)
            return;
        }
        setSentence(selectedSentence)
    }

    const chnageWord = (event) => {
        let selectedWord = parseInt(event.target.value);
        if (!compCounts || !selectedWord) {
            setWord(0);
            return;
        }
        if (0 > selectedWord) {
            setWord(0)
            return;
        }
        if (selectedWord > compCounts[paragraph - 1].sentences[sentence - 1].words) {
            setWord(compCounts[paragraph - 1].sentences[sentence - 1].words)
            return;
        }
        setWord(selectedWord)
    }

    if (compCounts == null && props.speechId != null) {
        loadCounts();
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <TextField
                    label="Paragraph"
                    type="number"
                    InputLabelProps={{ shrink: true, }}
                    InputProps={{
                        inputProps: { min: 0, max: compCounts == null ? 1 : compCounts.length }
                    }}
                    variant="outlined"
                    value={paragraph}
                    onChange={(e) => chnageParagraph(e)}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    label="Sentence"
                    type="number"
                    InputLabelProps={{ shrink: true, }}
                    InputProps={{
                        inputProps: {
                            min: 0,
                            max: compCounts == null || !paragraph || paragraph > compCounts.length || paragraph <= 0 ?
                                0
                                :
                                compCounts[paragraph - 1].sentences.length
                        }
                    }}
                    variant="outlined"
                    value={sentence}
                    onChange={(e) => chnageSentence(e)}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    disabled={props.wordNotShown}
                    label="Word"
                    type="number"
                    InputLabelProps={{ shrink: true, }}
                    InputProps={{
                        inputProps: {
                            min: 0,
                            max: compCounts == null || !paragraph || paragraph <= 0 || paragraph > compCounts.length ||
                                !sentence || sentence <= 0 || sentence > compCounts[paragraph - 1].sentences ?
                                0
                                :
                                compCounts[paragraph - 1].sentences[sentence - 1].words
                        }
                    }}
                    variant="outlined"
                    value={word}
                    onChange={(e) => chnageWord(e)}
                />
            </Grid>
            <Grid item xs={12}>
                <Button type="search" className={classes.iconButton} aria-label="search" onClick={(event) =>
                    props.sendLocation({
                        'paragraph': paragraph,
                        'sentence': sentence,
                        'word': word,
                    })}>
                    <SearchIcon />
                </Button>
            </Grid>
        </Grid>
    )
}

export default SpeechCounts;