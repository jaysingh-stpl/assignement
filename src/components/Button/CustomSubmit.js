import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const CustomSubmit = ({ isSending, text, ...others }) => {
    return (
        <Button type="submit" variant="contained" {...others} disabled={isSending}>
            {isSending ?
                <> Please wait
                    <CircularProgress size={20} className='text-white' />
                </>
                : text
            }
        </Button>
    )
}
export default CustomSubmit