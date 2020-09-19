import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function SearchResults(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle2" component="h6" align="left">
        {props.searchResults ? props.searchResults.length : 0} speeches found
      </Typography>
      <List className={classes.root}>
        {props.searchResults && props.searchResults.map(x =>
          <Link to={"/speech/" + x.id}>
            <ListItem>
              <ListItemText
                primary={x.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {x.speaker} | {x.location}
                    </Typography>
                    {(() => {
                      // Bold the searched word in the returned text
                      var text = x.text.split(props.query);
                      return (text.map((x, idx) => idx !== text.length - 1 ? <><span>{x}</span><b>{props.query}</b></> : <span>{x}</span>))
                    })()}
                  </React.Fragment>
                } />
            </ListItem>
          </Link>)
        }
      </List>
    </div >
  );
}

export default SearchResults;
