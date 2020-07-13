import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Typography } from '@material-ui/core';

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
    // cursor: "pointer",
  },
  title: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold"
  },
  textInn: {
    fontWeight: "bold",
    color: "#333"
  }
}));

export default function ReportCard({
  reportBgColor,
  reportTitle,
  reportNumber
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card style={{
      background: reportBgColor
    }} className={classes.PaperStyle} >
        <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
        { reportTitle }
        </Typography>
        <Typography variant="h2" className={classes.textInn} color="#000" component="h2">
        { reportNumber }
        </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
