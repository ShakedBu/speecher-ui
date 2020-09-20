import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
}));

function StatisticPopup(props) {
  const classes = useStyles();

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="customized-dialog-title">
      <DialogTitle id="draggable-dialog-title">
        Statistics
      </DialogTitle>
      <DialogContent dividers>
        <TextField id="standard-basic" label="..." inputProps={{ value: "" }} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => props.handleClose()} color="primary">
          Show
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default StatisticPopup;
