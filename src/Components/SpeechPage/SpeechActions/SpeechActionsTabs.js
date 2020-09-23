import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchLocation from './SearchLocation';
import SearchWord from './SearchWord';
import WordsList from './WordsList';

function SpeechActionsTabs(props) {
    const [tabPosition, setPosition] = useState(0);

    return (
        <>
            <AppBar position="static">
                <Tabs value={tabPosition} onChange={(event, newVal) => { setPosition(newVal) }} aria-label="Speech Actions" centered>
                    <Tab label="Search Word" />
                    <Tab label="Search Location" />
                    <Tab label="Words List" />
                </Tabs>
            </AppBar>
            <SearchWord index={0} value={tabPosition} speechId={props.speech?.speech_id} setMarkedWord={props.setMarkedWord} />
            <SearchLocation index={1} value={tabPosition} speechId={props.speech?.speech_id} setMarkedWord={props.setMarkedWord} />
            <WordsList index={2} value={tabPosition} speechId={props.speech?.speech_id} />
        </>
    )
}

export default SpeechActionsTabs;