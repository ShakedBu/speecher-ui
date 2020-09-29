import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import TocIcon from '@material-ui/icons/Toc';
import BarChartIcon from '@material-ui/icons/BarChart';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from "react-router-dom";

import GroupPage from './GroupPage/GroupPage';
import PhrasePage from './PhrasePage';
import StatisticPopup from './StatisticsPage/StatisticPopup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    color: '#fff',
  },
}));

function TopBar() {
  const classes = useStyles();

  const [gourpOpen, setGroupOpen] = useState(false);
  const [phraseOpen, setPhraseOpen] = useState(false);
  const [statisticOpen, setStatisticOpen] = useState(false);

  const openGroup = () => {
    setGroupOpen(true);
  };

  const openPhrase = () => {
    setPhraseOpen(true);
  };

  const openStatistic = () => {
    setStatisticOpen(true);
  };

  const closeStatistics = () => {
    setStatisticOpen(false);
  }

  const closeGroup = () => {
    setGroupOpen(false);
  }

  const closePhrase = () => {
    setPhraseOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Link to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              SPEECHER
            </Typography>
          </Link>
          <Tooltip title="Group" aria-label="group">
            <IconButton
              edge="end"
              aria-label="group"
              aria-haspopup="true"
              onClick={openGroup}
              color="inherit">
              <TocIcon />
            </IconButton>
          </Tooltip>
          <GroupPage open={gourpOpen} handleClose={closeGroup} />
          <Tooltip title="Phrase" aria-label="phrase">
            <IconButton
              edge="end"
              aria-label="phrase"
              aria-haspopup="true"
              onClick={openPhrase}
              color="inherit">
              <FormatQuoteIcon />
            </IconButton>
          </Tooltip>
          <PhrasePage open={phraseOpen} handleClose={closePhrase} />
          <Tooltip title="Statistics" aria-label="statistics">
            <IconButton
              edge="end"
              aria-label="statistics"
              aria-haspopup="true"
              onClick={openStatistic}
              color="inherit">
              <BarChartIcon />
            </IconButton>
          </Tooltip>
          <StatisticPopup open={statisticOpen} handleClose={closeStatistics} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;