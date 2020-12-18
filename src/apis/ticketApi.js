import moment from 'moment'
import { toast } from 'react-toastify'
import { createTicket, deleteTicket, updateTicket, validateTicket } from "../redux/actions/ticketAction"
import { makeRandomId } from '../utils/helper'

export const deleteTollTicket = (index, data) => dispatch => new Promise((resolve, reject) => {
    const copyData = [...data]
    copyData.splice(index, 1)
    return setTimeout(() => {
        dispatch(deleteTicket(copyData))
        toast.success('Ticket Deleted.')
        resolve(true)

    }, 2000);
})

export const createTollTicket = (data, apiData) => dispatch => new Promise((resolve, reject) => {
    data.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
    data.ticketNumber = makeRandomId(10)
    apiData.push(data)
    setTimeout(() => {
        dispatch(createTicket(apiData))
        toast.success('Ticket Generated Successfully.')
        resolve(true)

    }, 2000);
})
export const updateTollTicket = (id, editForm, apiData) => dispatch => new Promise((resolve, reject) => {
    const ticket = apiData[id]
    ticket.vehicleNumber = editForm.vehicleNumber
    ticket.isReturn = editForm.isReturn
    ticket.price = editForm.price
    apiData[id] = ticket
    setTimeout(() => {
        dispatch(updateTicket(apiData))
        toast.success('Ticket Updated.')
        resolve(true)
    }, 2000);

})
export const validateTollTicket = (data, apiData) => dispatch => new Promise((resolve, reject) => {
    const isExist = apiData.find(item => (item.ticketNumber === data.ticketNumber && item.isReturn === 'Yes' && moment(item.createdAt).isBefore(moment().subtract(24, 'hours'))))
    setTimeout(() => {
        dispatch(validateTicket((isExist ? 'Yes' : 'No')))
        resolve(true)
    }, 2000);
})