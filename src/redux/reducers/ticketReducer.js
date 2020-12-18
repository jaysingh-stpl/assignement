import { CREATE_TCIKET, DELETE_TICKET, UPDATE_TICKET, VALIDATE_TICKET } from '../constants/ticketConstant';

const initialState = {
    apiData: [],
    ticketExist: ''
}
const ticketReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_TCIKET:
            return { ...state, apiData: action.payload }

        case UPDATE_TICKET:
            return { ...state, apiData: action.payload }

        case DELETE_TICKET:
            return { ...state, apiData: action.payload }

        case VALIDATE_TICKET:
            return { ...state, ticketExist: action.payload }

        default:
            return state;
    }
}

export default ticketReducer;