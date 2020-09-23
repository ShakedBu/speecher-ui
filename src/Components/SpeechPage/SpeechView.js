import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

}));

function SpeechView(props) {
    const classes = useStyles();

    const buildSpeechText = () => {
        let searchedWord = props.searched;
        let markedWord = props.marked;
        let index = -1;

        return props.speech?.full_text.split('\n\n').map((x) => {
            if (searchedWord == null || !x.match(new RegExp(searchedWord, 'i')))
                return (<><div>{x}</div><br /></>)
            // TODO: Fix bug when the word is the first in the sentence :)
            let originalWords = x.match(new RegExp(searchedWord, 'ig'));
            let parts = x.split(new RegExp(searchedWord, 'i'));
            let startWithSearched = false;
            if (x.startsWith(searchedWord))
                startWithSearched = true;

            return (parts.map((w, idx) => {
                if (idx !== parts.length - 1) {
                    index++;
                    if (index === markedWord)

                        return (<><span>{w}</span><b id={searchedWord + index}><mark>{originalWords[idx]}</mark></b></>);

                    return (<><span>{w}</span><b id={searchedWord + index}>{originalWords[idx]}</b></>);
                }
                return (<><span>{w}</span><br /><br /></>)
            }))
        })
    }

    return (
        <>
            <Typography variant="h2" component="h3">{props.speech?.name}</Typography>
            <Typography variant="h5" component="h6">{props.speech?.speaker + " | " + props.speech?.location + " | " + props.speech?.date}</Typography>
            <Paper key={props.marked} style={{ maxHeight: 740, overflow: 'auto', textAlign: 'left' }} >
                {buildSpeechText()}
            </Paper>
        </>
    );
}

export default SpeechView;
