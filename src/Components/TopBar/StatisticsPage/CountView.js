import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';

import SpeechCounts from '../../SpeechPage/SpeechActions/SearchLocation/SpeechCounts';

import { countChars, countWords } from '../../../Utils/StatisticsUtils';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function CountView(props) {
    const classes = useStyles();

    const [speech, setSpeech] = useState(null);
    const [count, setCount] = useState(10);
    const [result, setResult] = useState(null);


    const handleChangeCount = (event) => {
        setCount(event.target.value);
    }

    const handleChangeSpeech = (speech) => {
        setSpeech(speech);
    }

    const handleChangeLocation = (location) => {
        if (count === 10) {
            countWords(speech?.id, location.paragraph, location.sentence).then((response) => {
                setResult(response);
            })
        }
        else {
            countChars(speech.id, location.paragraph, location.sentence, location.word).then((response) => {
                setResult(response);
            })
        }
    }

    return (
        <div role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Count</InputLabel>
                        <Select
                            value={count}
                            onChange={handleChangeCount}
                        >
                            <MenuItem value={10}>Words</MenuItem>
                            <MenuItem value={20}>Characters</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={10}>
                    <Autocomplete
                        options={props.speeches}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, newValue) => {
                            handleChangeSpeech(newValue);
                        }}
                        renderInput={(params) =>
                            <TextField {...params}
                                required
                                label="Speeches"
                                type="search"
                            />}
                    />
                </Grid>
                <Grid item xs={10}>
                    <SpeechCounts speechId={speech?.id} sendLocation={handleChangeLocation} wordNotShown={count == 10} />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant='h3' type='h4'>{result}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default CountView;
