import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import { Skeleton } from '@material-ui/lab';

const CustomTimePicker = ({ Controller, isLoading, control, error, defaultValue, ...inputProps }) => {
    const [time, setTime] = useState(defaultValue)
    if (isLoading) {
        return (
            <Skeleton height={50} />
        )
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                ampm={false}
                format={"HH:MM"}
                variant="inline"
                size="small"
                inputVariant="outlined"
                control={control}
                value={time}
                {...inputProps}
                as={
                    <TimePicker
                        error={(error ? true : false)}
                        helperText={error ? error.message : null}
                        onChange={d => setTime(d)}
                        value={time}
                    />
                }
            />
        </MuiPickersUtilsProvider>
    )
}
export default CustomTimePicker;
CustomTimePicker.defaultProps = {
    isLoading: false
}