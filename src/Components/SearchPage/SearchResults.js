import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

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
  const [results, setResults] = useState(null);

  return (
    <div>
      <Typography variant="subtitle2" component="h6" align="left">
        {props.SearchReesults ? props.SearchReesults.length : 0} speeches found
      </Typography>
      {props.query}

      <List className={classes.root}>
        {results && results.map(x =>
          <ListItem>
            <ListItemText
              primary={x.SpeechName}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {x.Speaker} | {x.Location}
                  </Typography>
                  {x.Text}
                </React.Fragment>
              } />
          </ListItem>)
        }
      </List>
    </div>
  );
}

export default SearchResults;
