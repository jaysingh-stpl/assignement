import React from 'react'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Skeleton } from '@material-ui/lab';

const CustomTextField = ({ isLoading, register, error, ...inputProps }) => {
    if (isLoading) {
        return (
            <Skeleton height={50} />
        )
    }
    return (
        <TextField
            fullWidth
            size="small"
            variant="outlined"
            error={(error ? true : false)}
            helperText={error ? error.message : null}
            inputRef={register}
            {...inputProps}
        />
    )
}
export default CustomTextField;
CustomTextField.defaultProps = {
    isLoading: false,
}
CustomTextField.propTypes = {
    isLoading: PropTypes.bool,
}