import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SearchLocation from './SearchLocation/SearchLocation';
import SearchWord from './SearchWord/SearchWord';
import SearchPhrase from './SearchPhrase';

function SpeechActionsTabs(props) {
    const [tabPosition, setPosition] = useState(0);

    return (
        <>
            <AppBar position="static">
                <Tabs value={tabPosition} onChange={(event, newVal) => { setPosition(newVal) }} aria-label="Speech Actions" centered>
                    <Tab label="Search Word" />
                    <Tab label="Search Location" />
                    <Tab label="Search Phrase" />
                </Tabs>
            </AppBar>
            <SearchWord index={0} value={tabPosition} speechId={props.speechId}
                setMarkedWord={props.setMarkedWord}
                setSearchedWord={props.setSearchedWord}
                setLoading={props.setLoading} />
            <SearchLocation index={1} value={tabPosition} speechId={props.speechId}
                setLocatedWord={props.setLocatedWord}
                setLoading={props.setLoading} />
            <SearchPhrase index={2} value={tabPosition} speechId={props.speechId}
                setMarkedWord={props.setMarkedWord}
                setSearchedWord={props.setSearchedWord}
                setLoading={props.setLoading} />
        </>
    )
}

export default SpeechActionsTabs;