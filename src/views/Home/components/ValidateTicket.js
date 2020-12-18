import { makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import ValidateTollTicketForm from './ValidateTollTicketForm';
import { validateTollTicket } from '../../../apis/ticketApi';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const ValidateTicket = props => {
    const { ticketExist } = props.ticket
    const [isSending, setisSending] = useState(false)
    const classes = useStyles();

    const validateTicket = async data => {
        setisSending(true)
        await props.validateTicket(data, props.ticket.apiData)
        setisSending(false)
    }


    return (
        <Paper className={classes.paper}>
            <Typography variant="h6">Check Toll Ticket</Typography>
            {ticketExist === 'Yes' &&
                <Typography variant="h6" style={{ color: 'green' }}>Give Pass </Typography>
            }
            {ticketExist === 'No' &&
                <Typography variant="h6" style={{ color: 'red' }}>Invalid Ticket</Typography>
            }
            <ValidateTollTicketForm
                onSubmit={validateTicket}
                isSending={isSending}
            />
        </Paper>
    )
}
const mapStateToProps = state => (
    {
        ticket: state.ticket
    }
)
const mapDispatchToProps = dispatch => ({
    validateTicket: bindActionCreators(validateTollTicket, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ValidateTicket)