import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getAllWords } from '../../../../Utils/WordUtils';
import { getWordsListFromSpeech } from '../../../../Utils/SpeechUtil';
import { getGroups, getGroup } from '../../../../Utils/GroupUtils';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
}));

function WordsList(props) {
    const classes = useStyles();

    const [listType, setListType] = useState(10);
    const [allGroups, setAllGroups] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState(null);

    const handleChangeType = (event) => {
        setListType(event.target.value)

        switch (event.target.value) {
            case 20:
                getWordsListFromSpeech(props.speechId).then((response) => props.setWordsList(response));
                break;
            case 30:
                getGroups("").then((response) => setAllGroups(response));
                break;
            default:
                loadWords();
                break;
        }
    }

    const handleChangeGroup = (event) => {
        setSelectedGroup(event.target.value)
        getGroup(event.target.value).then((response) => props.setWordsList(response));
    }

    const loadWords = () => {
        getAllWords().then((response) => props.setWordsList(response));
    }

    // if (props.wordsList == null)
    //     loadWords();

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>Words</InputLabel>
                <Select
                    value={listType}
                    onChange={handleChangeType}
                >
                    <MenuItem value={10}>All Words</MenuItem>
                    <MenuItem value={20}>Speech's Words</MenuItem>
                    <MenuItem value={30}>Group's Words</MenuItem>
                </Select>
                <FormHelperText>Choose words' source</FormHelperText>
            </FormControl>
            {listType !== 30 ?
                <></>
                :
                <FormControl className={classes.formControl}>
                    <InputLabel>Groups</InputLabel>
                    <Select
                        value={selectedGroup}
                        onChange={handleChangeGroup}
                    >
                        {allGroups?.map(g => <MenuItem key={g.id} value={g.id}>{g.name}</MenuItem>)}
                    </Select>
                    <FormHelperText>Choose group</FormHelperText>
                </FormControl>}
        </div>
    )
}

export default WordsList;