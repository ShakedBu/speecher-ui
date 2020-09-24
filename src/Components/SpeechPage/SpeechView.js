import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

}));

function SpeechView(props) {
    const classes = useStyles();

    const buildSpeechText = () => {
        // Mark only one Word
        if (props.located !== null) {
            let locatedWord = props.located;

            return props.speech?.full_text.split('\n\n').map((p, p_idx) => {

                if (p_idx !== locatedWord.paragraph - 1)
                    return <React.Fragment key={'p' + p_idx}><div>{p}</div><br /></React.Fragment>

                let sentences = p.split(/([\S]+?[[\S\s]+?(?:[.?!]))/).filter(s => s && s !== " ");

                return (sentences.map((s, s_idx) => {
                    if (s_idx !== locatedWord.sentence - 1) {
                        if (s_idx === sentences.length - 1)
                            return <React.Fragment key={'s' + s_idx}><span>{s} </span><br /><br /></React.Fragment>
                        return <span key={'s' + s_idx}>{s} </span>
                    }

                    let words = s.split(' ');
                    return (words.map((w, w_idx) => {
                        let wordElement;
                        if (w_idx === locatedWord.index - 1)
                            wordElement = <b key={'w' + w_idx} id={w + 1}><mark>{w} </mark></b>
                        else
                            wordElement = <span key={'w' + w_idx}>{w} </span>

                        if (s_idx === sentences.length - 1 && w_idx === words.length - 1)
                            return [wordElement, <br />, <br />]
                        else
                            return wordElement
                    }))
                }))
            })

        }
        // Mark all occourence of word
        else if (props.searched !== null) {
            let searchedWord = props.searched;
            let markedWord = props.marked;
            let index = -1;

            return props.speech?.full_text.split('\n\n').map((x) => {
                // If there us no appearance of the word - print it
                if (!x.match(new RegExp(searchedWord, 'i')))
                    return (<><div>{x}</div><br /></>)

                let originalWords = x.match(new RegExp(searchedWord, 'ig'));
                let parts = x.split(new RegExp(searchedWord, 'i'));

                // Build the paragraph with the marked words :)
                return (parts.map((w, idx) => {
                    if (idx !== parts.length - 1) {
                        index++;
                        if (index === markedWord)
                            return (<span key={idx}><span>{w}</span><b id={searchedWord + index}><mark>{originalWords[idx]}</mark></b></span>);

                        return (<span key={idx}><span>{w}</span><b id={searchedWord + index}>{originalWords[idx]}</b></span>);
                    }
                    return (<span key={idx}><span>{w}</span><br /><br /></span>)
                }))
            })
        }
        return (props.speech?.full_text.split('\n\n').map((x, idx) => <span key={idx}><div>{x}</div><br /></span>));
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
