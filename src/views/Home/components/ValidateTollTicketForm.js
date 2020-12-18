import { FormControl, Grid } from '@material-ui/core';
import React from 'react'
import { useForm } from "react-hook-form";
import { ModalBody, ModalFooter } from "reactstrap";
import * as Yup from 'yup'
import CustomSubmit from '../../../components/Button/CustomSubmit';
import CustomTextField from '../../../components/FormInput/CustomTextField';

const ValidateTollTicketForm = ({ onSubmit, isSending }) => {
    const validationSchema = Yup.object({
        ticketNumber: Yup.string().trim().required('This field is required'),
    })
    const { handleSubmit, register, errors, } = useForm({ mode: 'onBlur', validationSchema });

    return (
        <form className="was-validated" onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
                <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <FormControl fullWidth>
                            <CustomTextField
                                name="ticketNumber"
                                label="Ticket Number"
                                register={register}
                                error={errors.ticketNumber} />
                        </FormControl>
                    </Grid>
                </Grid>
            </ModalBody>
            <ModalFooter>
                <CustomSubmit
                    text="Validate Ticket"
                    color="primary"
                    isSending={isSending}
                />
            </ModalFooter>
        </form>
    )
}
export default ValidateTollTicketForm