import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import { getGroup } from '../../../Utils/GroupUtils';

import GroupList from './GroupList';
import GroupEdit from './GroupEdit';

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
  list: {
  },
}));

function GroupPage(props) {
  const classes = useStyles();

  const [currGroup, setCurrGroup] = useState(null);

  const setCurrentGroup = (groupId, groupName) => {
    getGroup(groupId).then((response) => {
      setCurrGroup({
        'id': groupId,
        'name': groupName,
        'words': response,
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
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <GroupList currGroup={currGroup} setSelected={setCurrentGroup} />
          </Grid>
          <Grid item xs={8}>
            <GroupEdit group={currGroup} groupChanged={setCurrentGroup} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => props.handleClose()} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default GroupPage;
