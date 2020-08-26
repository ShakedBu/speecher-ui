import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 40 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function GroupPage(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [groups, setGroups] = useState(null);
  const [currGroup, setCurrGroup] = useState(null);

  return (
    <Modal
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <div style={modalStyle} className={classes.paper} >
        Words Group
        <TextField id="standard-basic" label="Group Name" inputProps={{ value: currGroup && currGroup.name}} />
        <TextField id="outlined-search" label="Add Word" type="search" variant="outlined" />
      </div>
    </Modal>
  );
}

export default GroupPage;
