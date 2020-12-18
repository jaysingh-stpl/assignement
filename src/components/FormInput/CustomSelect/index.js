import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Skeleton } from '@material-ui/lab';

const CustomSelect = ({ isLoading, Controller, control, error, children, defaultValue, ...inputProps }) => {

    if (isLoading) {
        return (
            <Skeleton height={50} />
        )
    }
    return (
        <FormControl variant="outlined" fullWidth size="small" error={(error ? true : false)} >
            <InputLabel>{inputProps.label}</InputLabel>
            <Controller
                control={control}
                {...inputProps}
                as={
                    <Select>
                        <MenuItem value=""><em>Select {inputProps.label}</em></MenuItem>
                        {children}
                    </Select>
                }
            />
            <FormHelperText>{error ? error.message : null}</FormHelperText>
        </FormControl>
    )
}
export default CustomSelect;

CustomSelect.defaultProps = {
    isLoading: false
}