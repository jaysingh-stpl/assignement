import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { Skeleton } from '@material-ui/lab';

const CustomDatePicker = ({ Controller, isLoading, control, error, defaultValue, ...inputProps }) => {
    const [date, setDate] = useState(defaultValue)
    if (isLoading) {
        return (
            <Skeleton height={50} />
        )
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                variant="inline"
                size="small"
                inputVariant="outlined"
                control={control}
                value={date}
                {...inputProps}
                as={
                    <DatePicker
                        error={(error ? true : false)}
                        helperText={error ? error.message : null}
                        onChange={d => setDate(d)}
                        value={date}
                    />
                }
            />
        </MuiPickersUtilsProvider>
    )
}
export default CustomDatePicker;
CustomDatePicker.defaultProps = {
    isLoading: false
}