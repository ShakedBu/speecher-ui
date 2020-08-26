import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import TocIcon from '@material-ui/icons/Toc';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
  },
}));

function TopBar() {
  const classes = useStyles();

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
            aria-haspopup="true"
            //TODO: add group popup
            onClick={console.log("group")}
            color="inherit">
            <TocIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="phrase"
            aria-haspopup="true"
            //TODO: add phrase Popup
            onClick={console.log("phrase")}
            color="inherit">
            <FormatQuoteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;