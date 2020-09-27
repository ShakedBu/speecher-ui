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

import { getAllSpeeches } from '../../../Utils/SpeechUtil';
import { countChars, countWords } from '../../../Utils/StatisticsUtils';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function CountView(props) {
    const classes = useStyles();

    const [speeches, setSpeeches] = useState(null);
    const [speech, setSpeech] = useState(null);
    const [count, setCount] = useState(10);
    const [result, setResult] = useState(null);

    const loadSpeeches = () => {
        getAllSpeeches().then((response) => {
            setSpeeches(response);
        })
    }

    const handleChangeCount = (event) => {
        setCount(event.target.value);
    }

    const handleChangeSpeech = (speech) => {
        setSpeech(speech);
    }

    const handleChangeLocation = (location) => {
        if (count === 10) {
            countWords(speech.id, location.paragraph, location.sentence).then((response) => {
                setResult(response);
            })
        }
        else {
            countChars(speech.id, location.paragraph, location.sentence, location.word).then((response) => {
                setResult(response);
            })
        }
    }

    if (speeches == null)
        loadSpeeches();

    return (
        <div role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                    <Autocomplete
                        options={speeches}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        onChange={(event, newValue) => {
                            handleChangeSpeech(newValue);
                        }}
                        renderInput={(params) =>
                            <TextField {...params}
                                label="Speeches"
                                type="search"
                            />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SpeechCounts speechId={speech?.id} sendLocation={handleChangeLocation} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h3' type='h4'>{result}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default CountView;
