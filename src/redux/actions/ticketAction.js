import { CREATE_TCIKET, DELETE_TICKET, UPDATE_TICKET, VALIDATE_TICKET } from '../constants/ticketConstant';


export const createTicket = data => {
    return {
        type: CREATE_TCIKET,
        payload: data
    }
}
export const updateTicket = data => {
    return {
        type: UPDATE_TICKET,
        payload: data
    }
}
export const deleteTicket = data => {
    return {
        type: DELETE_TICKET,
        payload: data
    }
}
export const validateTicket = data => {
    return {
        type: VALIDATE_TICKET,
        payload: data
    }
}