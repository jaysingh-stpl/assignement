import ticketReducer from './ticketReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    ticket: ticketReducer
})
export default rootReducer