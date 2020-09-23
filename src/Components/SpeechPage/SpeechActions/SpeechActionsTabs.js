import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchLocation from './SearchLocation';
import SearchWord from './SearchWord';
import WordsList from './WordsList';

const useStyles = makeStyles((theme) => ({
}));

function SpeechActionsTabs(props) {
    const classes = useStyles();

    const [tabPosition, setPosition] = useState(0);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={tabPosition} onChange={(event, newVal) => { setPosition(newVal) }} aria-label="Speech Actions" centered>
                    <Tab label="Search Word" />
                    <Tab label="Search Location" />
                    <Tab label="Words List" />
                </Tabs>
            </AppBar>
            <SearchWord index={0} value={tabPosition} speechId={props.speech?.speech_id}/>
            <SearchLocation index={1} value={tabPosition} />
            <WordsList index={2} value={tabPosition} />
        </div>
    )
}

export default SpeechActionsTabs;