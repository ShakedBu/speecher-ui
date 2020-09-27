import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

function WordAppearance(props) {
  const classes = useStyles();

  return (
    <div role="tabpanel"
      hidden={props.value !== props.index}
      id={`simple-tabpanel-${props.index}`}
      aria-labelledby={`simple-tab-${props.index}`}>
        Word
    </div>
  );
}

export default WordAppearance;
