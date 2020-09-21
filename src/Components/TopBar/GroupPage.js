import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import { createGroup, getGroups, getGroup } from '../../Utils/GroupUtils';

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

  if (groups == null) {
    getGroups("").then((response) =>
      setGroups(response));
  }

  const createNewGroup = () => {
    createGroup(currGroup.name, currGroup.words).then((response) => {
      props.handleClose();
    })
  }

  const openGroup = (groupId, groupName) => {
    getGroup(groupId).then((response) => {
      setCurrGroup({
        'id': groupId,
        'name': groupName,
        'words': response
      });
    })
  }

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}
      aria-labelledby="customized-dialog-title">
      <DialogTitle id="draggable-dialog-title">Words Group</DialogTitle>
      <DialogContent dividers>
        <List component="nav" aria-label="groups">
          {groups?.map((group) =>
            <ListItem key={group.id} button onClick={() => { openGroup(group.id, group.name) }}>
              <ListItemText primary={group.name} />
            </ListItem>)}
        </List>
        <TextField id="standard-basic" label="Group Name" inputProps={{ value: currGroup?.name }} />
        <TextField id="outlined-search" label="Add Word" type="search" variant="outlined" />
        <Paper component="ul" className={classes.chips}>
          {currGroup?.words?.map((word) =>
            <li key={word.id}>
              <Chip
                label={word.name}
                className={classes.chip}
                onDelete={undefined}
              />
            </li>
          )}
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => createNewGroup()} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default GroupPage;
