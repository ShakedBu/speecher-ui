import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import { createGroup, getGroups } from '../../../Utils/GroupUtils';

function GroupList(props) {
    const [groups, setGroups] = useState(null);
    const [newGroupName, setNewGroupName] = useState("");

    const loadGroups = () => {
        getGroups("").then((response) =>
            setGroups(response));
    }

    const createNewGroup = (groupName) => {
        createGroup(groupName, []).then(() =>
            loadGroups())
    }

    if (groups == null) {
        loadGroups();
    }

    return (
        <>
            <TextField
                label="New Group Name"
                type="search"
                value={newGroupName}
                onChange={(event) => setNewGroupName(event.target.value)} />
            <Tooltip title="Create" aria-label="group">
                <Button onClick={() => { createNewGroup(newGroupName) }}>
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                </Button>
            </Tooltip>
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
                        selected={group.id == props.currGroup?.id}
                        onClick={() => { props.setSelected(group.id, group.name) }}
                    >
                        <ListItemText primary={group.name} />
                    </ListItem>)}
            </List>
        </>
    )

}

export default GroupList;