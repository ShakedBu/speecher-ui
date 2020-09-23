import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

}));

function SpeechView(props) {
    const classes = useStyles();

    const buildSpeechText = () => {
        let index = -1;
        return props.speech?.full_text.split('\n\n').map((x) => {
            if (props.marked == null || !x.includes(props.marked))
                return (<><div>{x}</div><br /></>)

            let originalWords = x.match(new RegExp(props.marked, 'ig'));
            let parts = x.split(new RegExp(props.marked, 'i'));
            return (parts.map((w, idx) => {
                if (idx !== parts.length - 1) {
                    index++;
                    return (<><span>{w}</span><span id={props.marked + index} class={props.marked + index}>{originalWords[idx]}</span></>)
                }
                return (<><span>{w}</span><br /><br /></>)
            }))
        })
    }

    return (
        <>
            <Typography variant="h2" component="h3">{props.speech?.name}</Typography>
            <Typography variant="h5" component="h6">{props.speech?.speaker + " | " + props.speech?.location + " | " + props.speech?.date}</Typography>
            <Paper key={props.marked} style={{ maxHeight: 800, overflow: 'auto', textAlign: 'left' }} >
                {buildSpeechText()}
            </Paper>
        </>
    );
}

export default SpeechView;
