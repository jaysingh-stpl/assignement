import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from "@material-ui/styles";
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({

    backdrop: {
        zIndex: 9999,
        color: "#fff",
    },
}));

const CustomBackDrop = ({ open }) => {
    const classes = useStyles();

    return (
        <Backdrop open={open} className={classes.backdrop}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
export default CustomBackDrop