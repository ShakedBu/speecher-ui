import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import { removeWordsFromGroup, addWords2Group } from '../../../Utils/GroupUtils';
import { getAllWords } from '../../../Utils/WordUtils';

const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    },
    chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
        border: 'none',
        boxShadow: 'none',
    },
}));

function GroupEdit({ group, groupChanged }) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const [allWords, setWords] = useState(null);
    const [word, setWord] = useState("");

    const loadWords = () => {
        getAllWords().then((response) => {
            setWords(response);
        })
    }

    const addWordToGroup = (groupId, word) => {
        addWords2Group(groupId, [word.id]).then((response) => {
            if (!response?.error)
                groupChanged(groupId, group?.name)
            else {
                enqueueSnackbar(response.error.data?.message, {
                    variant: 'error',
                });
            }
        })
    }

    const removeWordToGroup = (groupId, word) => {
        removeWordsFromGroup(groupId, [word]).then((response) => {
            if (!response?.error)
                groupChanged(groupId, group?.name)
            else {
                enqueueSnackbar(response.error.data?.message, {
                    variant: 'error',
                });
            }
        })
    }

    if (allWords == null) {
        loadWords();
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant="h6" label="Group Name">
                    {group?.name == null ? "" : group.name}
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Autocomplete
                    options={allWords}
                    getOptionLabel={(option) => option.word}
                    onChange={(event, newValue) => {
                        setWord(newValue);
                    }}
                    renderInput={(params) =>
                        <TextField {...params}
                            required
                            label="Add Word"
                            type="search"
                        />}
                />
            </Grid>
            <Grid item xs={2}>
                <Tooltip title="Add" aria-label="word">
                    <Button disabled={group == null} onClick={() => { addWordToGroup(group?.id, word) }}>
                        <IconButton>
                            <AddCircleIcon />
                        </IconButton>
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={12}>
                <Paper component="ul" className={classes.chips}>
                    {group?.words?.map((word) =>
                        <li key={word.id}>
                            <Chip
                                label={word.word}
                                className={classes.chip}
                                onDelete={() => removeWordToGroup(group.id, word.id)}
                            />
                        </li>
                    )}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default GroupEdit;