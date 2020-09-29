import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  count: {
    marginLeft: '5px',
  },
}));

function SearchResults({ searchResults, query }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.count} variant="subtitle2" component="h6" align="left">
        {searchResults ? searchResults.length : 0} speeches found
      </Typography>
      <List className={classes.root}>
        {searchResults?.map(x =>
          <Link key={x.id} to={"/speech/" + x.id}>
            <ListItem>
              <ListItemText
                primary={x.name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body1"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {x.speaker} | {x.location}
                    </Typography>
                    <Typography variant="body2">
                      {(() => {
                        // Bold the searched word in the returned text
                        let originalWords = x.text.match(new RegExp(query, 'ig'));
                        let text = x.text.split(new RegExp(query, 'i'));

                        return (text.map((x, idx) => idx !== text.length - 1 ?
                          <React.Fragment key={idx} >
                            <span>{x}</span>
                            <b>{originalWords[idx]}</b>
                          </React.Fragment>
                          :
                          <span key={idx} >{x}</span>))
                      })()}
                    </Typography>
                  </>
                } />
            </ListItem>
          </Link>)}
      </List>
    </>
  );
}

export default SearchResults;