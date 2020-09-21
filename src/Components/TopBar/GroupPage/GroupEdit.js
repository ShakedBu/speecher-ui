import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { getGroup, addWords2Group } from '../../../Utils/GroupUtils';
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

function GroupEdit({group, groupChanged}) {
    const classes = useStyles();

    const [allWords, setWords] = useState(null);
    const [word, setWord] = useState("");

    const loadWords = () => {
        getAllWords().then((response) => {
            setWords(response);
        })
    }

    const addWordToGroup = (groupId, word) => {
        addWords2Group(groupId, [word]).then(() => {
            groupChanged(groupId, group.name)
        })
    }

    if (allWords == null) {
        loadWords();
    }

    return (
        <>
            <Typography id="standard-basic" variant="h6" label="Group Name">
                {group?.name == null ? "" : group.name}
            </Typography>
            <Autocomplete
                id="combo-box-demo"
                options={allWords}
                getOptionLabel={(option) => option.word}
                style={{ width: 300 }}
                renderInput={(params) =>
                    <TextField id="outlined-search"
                        label="Add Word"
                        type="search"
                        variant="outlined"
                        value={word}
                        onChange={(event) => setWord(event.target.value)} />}
            />
            <Tooltip title="Add" aria-label="word">
                <Button onClick={() => { addWordToGroup(group.id, word) }}>
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                </Button>
            </Tooltip>
            <Paper component="ul" className={classes.chips}>
                {group?.words?.map((word) =>
                    <li key={word.id}>
                        <Chip
                            label={word.name}
                            className={classes.chip}
                            onDelete={undefined}
                        />
                    </li>
                )}
            </Paper>
        </>
    )
}

export default GroupEdit;