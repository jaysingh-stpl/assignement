import React from 'react'
import { withStyles } from '@material-ui/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const CustomSlider = ({ Controller, control, label, error, ...inputProps }) => {
    return (
        <>
            <Typography gutterBottom>{label}</Typography>
            <Controller
                control={control}
                onChange={([, value]) => value}
                {...inputProps}
                as={
                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label={label}
                    />
                }
            />
        </>
    )
}
export default CustomSlider;