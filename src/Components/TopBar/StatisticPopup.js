import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import SpeechCounts from '../SpeechPage/SpeechActions/SearchLocation/SpeechCounts';

import { getAllSpeeches, getCountsBySpeech } from '../../Utils/SpeechUtil';
import { countChars, countWords } from '../../Utils/StatisticsUtils';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function StatisticPopup(props) {
  const classes = useStyles();

  const [speeches, setSpeeches] = useState(null);
  const [speech, setSpeech] = useState(null);
  const [count, setCount] = useState(10);

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

  }

  if (speeches == null)
    loadSpeeches();

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="customized-dialog-title">
      <DialogTitle id="draggable-dialog-title">
        Statistics
      </DialogTitle>
      <DialogContent dividers>
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
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => { }} color="primary">
          Show
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default StatisticPopup;
