import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'; import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';

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

function GroupPage(props) {
  const classes = useStyles();

  const [groups, setGroups] = useState(null);
  const [currGroup, setCurrGroup] = useState(null);

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="customized-dialog-title">
      <DialogTitle id="draggable-dialog-title">Words Group</DialogTitle>
      <DialogContent dividers>
        <form>
          <TextField id="standard-basic" label="Group Name" inputProps={{ value: currGroup && currGroup.name }} />
          <TextField id="outlined-search" label="Add Word" type="search" variant="outlined" />
          <Paper component="ul" className={classes.chips}>
            {currGroup && currGroup.words.map((word) =>
              <li key={word}>
                <Chip
                  label={word}
                  className={classes.chip}
                  onDelete={undefined}
                />
              </li>
            )}
          </Paper>
        </form>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => props.handleClose()} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default GroupPage;
