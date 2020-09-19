import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import { getSpeech } from '../../Utils/SpeechUtil';

const useStyles = makeStyles((theme) => ({
}));

function SpeechPage(props) {
    const classes = useStyles();

    const [speech, setSpeech] = useState(null);

    var speechId = useParams();

    if (speech == null) {
        getSpeech(speechId).then((response) => { setSpeech(response); })
    }

    return (
        <div>
            {speech && speech.full_text}
        </div>
    );
}

export default SpeechPage;
