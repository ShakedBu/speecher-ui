import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
//import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { createPhrase, getAllWords } from '../../Utils/WordUtils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

function PhrasePage(props) {
  const classes = useStyles();

  const [allWords, setAllWords] = useState(null);
  const [words, setWords] = useState([]);

  const loadWords = () => {
    getAllWords().then((response) => {
      setAllWords(response);
    })
  }

  const newPhrase = () => {
    createPhrase(words).then((response) => {
      alert('Phrase Crated :)');
      props.handleClose();
    });
  }

  if (allWords == null) {
    loadWords();
  }

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="customized-dialog-title">
      <DialogTitle id="draggable-dialog-title">
        New Phrase
      </DialogTitle>
      <DialogContent dividers>
        <div className={classes.root}>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={allWords}
            getOptionLabel={(option) => option.word}
            filterSelectedOptions
            onChange={(event, newValue) => {
              setWords(newValue.map((word) => word.id))
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Words"
                placeholder="Phrase"
              />
            )}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => newPhrase()} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PhrasePage;
