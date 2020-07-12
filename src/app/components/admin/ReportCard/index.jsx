import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(39),
      height: theme.spacing(16),
    },
  },
  PaperStyle: {
    cursor: "pointer",
  }
}));

export default function ReportCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.PaperStyle} elevation={1} />
      <Paper className={classes.PaperStyle} elevation={1} />
    </div>
  );
}
