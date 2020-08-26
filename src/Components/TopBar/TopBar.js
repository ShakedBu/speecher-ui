import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import TocIcon from '@material-ui/icons/Toc';
import GroupPage from '../GroupPage/GroupPage';
import PhrasePage from '../PhrasePage/PhrasePage';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
  },
}));

function TopBar() {
  const classes = useStyles();

  const [gourpOpen, setGroupOpen] = useState(false);
  const [phraseOpen, setPhraseOpen] = useState(false);

  const openGroup = () => {
    setGroupOpen(true);
  };

  const openPhrase = () => {
    setPhraseOpen(true);
  };

  const closeGroup = () => {
    debugger;
    setGroupOpen(false);
  }

  const closePhrase = () => {
    setPhraseOpen(false);
  }

  return (
    <div className="TopBar">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            SPEECHER
          </Typography>
          <IconButton
            edge="end"
            aria-label="group"
            aria-labelledby="customized-dialog-title"
            //TODO: add group popup
            onClick={openGroup}>
            <TocIcon />
          </IconButton>
          <GroupPage open={gourpOpen} handleClose={closeGroup} />
          <IconButton
            edge="end"
            aria-label="phrase"
            aria-haspopup="true"
            //TODO: add phrase Popup
            onClick={openPhrase}
            color="inherit">
            <FormatQuoteIcon />
          </IconButton>
          <PhrasePage open={phraseOpen} handleClose={closePhrase} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;