import React from 'react'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckBox = ({ Controller, control, error, defaultValue, ...inputProps }) => {
    return (
        <FormControl component="fieldset" error={(error ? true : false)} >
            <FormControlLabel
                control={<Controller control={control} {...inputProps} as={Checkbox} type="checkbox" />}
                label={inputProps.label}
            />
            {error &&
                <FormHelperText>{error.message}</FormHelperText>
            }
        </FormControl>
    )
}
export default CustomCheckBox;