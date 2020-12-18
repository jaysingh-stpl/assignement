import * as Yup from 'yup'
import React from 'react'
import { ModalBody, ModalFooter } from 'reactstrap';
import { FormControl, Grid, MenuItem } from '@material-ui/core';
import CustomTextField from '../../../components/FormInput/CustomTextField';
import CustomSelect from '../../../components/FormInput/CustomSelect';
import { Controller, useForm } from 'react-hook-form';
import CustomSubmit from '../../../components/Button/CustomSubmit';

const GenerateTollTicketForm = ({ onSubmit, defaultValues, toggleForm, isSending }) => {
    const validationSchema = Yup.object({
        vehicleNumber: Yup.string().trim().required('This field is required'),
        isReturn: Yup.string().trim().required('This field is required'),
        price: Yup.number().required('This field is required'),
    })
    const { handleSubmit, watch, register, control, errors, } = useForm({ mode: 'onBlur', validationSchema, defaultValues });
    const watchIsReturn = watch('isReturn')
    return (
        <form className="was-validated" onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
                <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <FormControl fullWidth>
                            <CustomTextField
                                name="vehicleNumber"
                                label="Vehicle Number"
                                register={register}
                                error={errors.vehicleNumber} />
                        </FormControl>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                        <FormControl fullWidth>
                            <CustomSelect
                                name="isReturn"
                                label="Is Return"
                                control={control}
                                Controller={Controller}
                                error={errors.isReturn}
                            >
                                <MenuItem value="No">No</MenuItem>
                                <MenuItem value="Yes">Yes</MenuItem>
                            </CustomSelect>
                        </FormControl>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                        <FormControl fullWidth>
                            <CustomTextField
                                name="price"
                                label="price"
                                register={register}
                                error={errors.price}
                                value={watchIsReturn === 'Yes' ? 200 : 100}
                                disabled={true}
                            />
                        </FormControl>
                    </Grid>

                </Grid>
            </ModalBody>
            <ModalFooter>
                <CustomSubmit
                    text="Save"
                    color="primary"
                    isSending={isSending}
                />
            </ModalFooter>
        </form>
    )
}

export default GenerateTollTicketForm