import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import { createGroup, getGroups } from '../../../Utils/GroupUtils';

function GroupList(props) {
    const { enqueueSnackbar } = useSnackbar();

    const [groups, setGroups] = useState(null);
    const [newGroupName, setNewGroupName] = useState("");

    const loadGroups = () => {
        getGroups("").then((response) =>
            setGroups(response));
    }

    const createNewGroup = (groupName) => {
        createGroup(groupName, []).then((response) => {
            if (response?.error) {
                enqueueSnackbar(response.error.data?.message, {
                    variant: 'error',
                });
            }
            else
                loadGroups()
        })
    }

    if (groups == null) {
        loadGroups();
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={8}>
                <TextField
                    required
                    label="New Group Name"
                    type="search"
                    value={newGroupName}
                    onChange={(event) => setNewGroupName(event.target.value)} />
            </Grid>
            <Grid item xs={2}>
                <Tooltip title="Create" aria-label="group">
                    <Button disabled={newGroupName === ""} onClick={() => { createNewGroup(newGroupName) }}>
                        <IconButton>
                            <AddCircleIcon />
                        </IconButton>
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={10}>
                <List
                    component="nav"
                    aria-label="groups"
                    subheader={
                        <ListSubheader component="div" id="list-subheader">
                            Groups
                </ListSubheader>}
                >
                    {groups?.map((group) =>
                        <ListItem
                            key={group.id}
                            button
                            selected={group.id === props.currGroup?.id}
                            onClick={() => { props.setSelected(group.id, group.name) }}
                        >
                            <ListItemText primary={group.name} />
                        </ListItem>)}
                </List>
            </Grid>
        </Grid>
    )
}

export default GroupList;