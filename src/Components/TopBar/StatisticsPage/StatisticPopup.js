import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DialogTitle from '@material-ui/core/DialogTitle';

import WordAppearance from './WordAppearance';
import CountView from './CountView';

import { getAllSpeeches } from '../../../Utils/SpeechUtil';

const useStyles = makeStyles((theme) => ({

}));

function StatisticPopup(props) {
  const classes = useStyles();

  const [tabPosition, setPosition] = useState(0);
  const [speeches, setSpeeches] = useState(null);

  const loadSpeeches = () => {
    getAllSpeeches().then((response) => {
      setSpeeches(response);
    })
  }

  if (speeches == null)
    loadSpeeches();

  return (
    <Dialog
      open={props.open}
      onClose={() => props.handleClose()}>
      <DialogTitle>
        Statistics
      </DialogTitle>
      <DialogContent dividers>
        <AppBar position="static">
          <Tabs value={tabPosition} onChange={(event, newVal) => { setPosition(newVal) }} aria-label="Speech Actions" centered>
            <Tab label="Count" />
            <Tab label="Word Appearances" />
          </Tabs>
        </AppBar>
        <CountView index={0} value={tabPosition} speeches={speeches} />
        <WordAppearance index={1} value={tabPosition} speeches={speeches}/>
      </DialogContent>
    </Dialog>
  );
}

export default StatisticPopup;
