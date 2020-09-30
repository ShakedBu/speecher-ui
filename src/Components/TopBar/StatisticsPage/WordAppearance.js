import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { wordsAppearances } from '../../../Utils/StatisticsUtils';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '10px auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function WordAppearance(props) {
  const classes = useStyles();

  const [WordAppearances, setWordAppearances] = useState(null);
  const [speech, setSpeech] = useState(null);

  const handleChangeSpeech = (speech) => {
    setSpeech(speech);
  }

  const showAppearances = () => {
    wordsAppearances(speech?.id).then((response) => setWordAppearances(response));
  }

  return (
    <div role="tabpanel"
      hidden={props.value !== props.index}
      id={`simple-tabpanel-${props.index}`}
      aria-labelledby={`simple-tab-${props.index}`}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Autocomplete
            options={props.speeches}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {
              handleChangeSpeech(newValue);
            }}
            renderInput={(params) =>
              <TextField {...params}
                label="Speeches"
                type="search"
              />}
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="search" className={classes.iconButton} aria-label="search" onClick={(event) => { showAppearances() }}>
            <SearchIcon />
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Paper style={{ maxHeight: 660, overflow: 'auto' }} elevation={3}>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Word</TableCell>
                    <TableCell align="center">Appearances</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {WordAppearances?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="center" component="th" scope="row">{row.word}</TableCell>
                      <TableCell align="center">{row.appearances}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default WordAppearance;
