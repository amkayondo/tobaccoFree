import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    dataCtn: {
        marginTop: "12px",
        width: "74%"
    }
}))

export default function ReportCtner({
    children
}) {
    const classes = useStyles();
    return (
        <Container className={classes.dataCtn}>
            <Typography>
                Reports
            </Typography>
            { children }
        </Container>
    )
}
