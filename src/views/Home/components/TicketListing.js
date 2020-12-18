import { IconButton } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CustomTable from '../../../components/CustomTable'

const TicketListing = props => {
    const { apiData } = props.ticket

    const data = apiData.map((item, index) => {
        return ([
            item.ticketNumber,
            item.vehicleNumber,
            item.isReturn,
            item.price,
            item.createdAt,
            <>
                <IconButton title="edit" aria-label="edit" style={{ color: "green" }} onClick={() => { props.toggleEditForm(item, index) }}>
                    <EditIcon size="small" />
                </IconButton>
                <IconButton title="delete" aria-label="delete" color="secondary" onClick={() => { props.deleteTollTicket(index) }}>
                    <DeleteIcon />
                </IconButton>
            </>
        ])
    })


    return (
        <CustomTable
            title={'Receipts'}
            columns={['Ticket No.', 'Vehicle No.', 'Is Return', 'Price', 'Created At', 'Action']}
            data={data}
        />
    )
}
const mapStateToProps = state => (
    {
        ticket: state.ticket
    }
)

export default connect(mapStateToProps)(TicketListing)