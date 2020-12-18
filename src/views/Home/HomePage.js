
import React, { useState } from 'react';
import { ModalHeader, Modal, } from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import { makeStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import TicketListing from './components/TicketListing';
import { bindActionCreators } from 'redux';
import { createTollTicket, deleteTollTicket, updateTollTicket } from '../../apis/ticketApi';
import ValidateTicket from './components/ValidateTicket';
import GenerateTollTicketForm from './components/GenerateTollTicketForm';


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

const HomePage = props => {
  const classes = useStyles();
  const [isSending, setIsSending] = useState(false)
  const [editFormOpen, setEditFormOpen] = useState(false)
  const [editFormData, setEditFormData] = useState({})

  const toggleEditForm = (data, index) => {
    if (data) {
      setEditFormData({ id: index, vehicleNumber: data.vehicleNumber, isReturn: data.isReturn, price: data.price })
    }
    setEditFormOpen(!editFormOpen)
  }

  const deleteTollTicket = (index) => {
    swal('Are you sure you want to delete this Ticket?', {
      buttons: { cancel: 'No', confirm: { text: 'Yes', closeModal: false } },
    }).then(async willDelete => {
      if (willDelete) {
        await props.deleteTicket(index, props.ticket.apiData)
        swal.stopLoading();
        swal.close();
      }
    })
  }

  const generateTicket = async (data) => {
    setIsSending(true)
    await props.createTicket(data, props.ticket.apiData)
    setIsSending(false)
  }

  const updateTollTicket = async (editForm) => {
    setIsSending(true)
    await props.updateTicket(editFormData.id, editForm, props.ticket.apiData)
    setEditFormOpen(!editFormOpen)
    setIsSending(false)

  }



  return (
    <div className="animated fadeIn">
      <Grid container spacing={3}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} sm={12}>
            <ValidateTicket />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Generate Toll Ticket</Typography>
              <GenerateTollTicketForm
                onSubmit={generateTicket}
                isSending={isSending}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TicketListing
            toggleEditForm={toggleEditForm}
            deleteTollTicket={deleteTollTicket}
          />
        </Grid>
      </Grid>

      <Modal isOpen={editFormOpen} toggle={toggleEditForm} className={'modal-lg'}>
        <ModalHeader toggle={toggleEditForm}>Add Department</ModalHeader>
        <GenerateTollTicketForm
          onSubmit={updateTollTicket}
          toggleForm={toggleEditForm}
          defaultValues={editFormData}
          isSending={isSending}
        />
      </Modal>
    </div>
  );
}
const mapStateToProps = state => (
  {
    ticket: state.ticket
  }
)
const mapDispatchToProps = dispatch => ({
  createTicket: bindActionCreators(createTollTicket, dispatch),
  deleteTicket: bindActionCreators(deleteTollTicket, dispatch),
  updateTicket: bindActionCreators(updateTollTicket, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
