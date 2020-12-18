import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
const DropzoneArea = dynamic(() => import('material-ui-dropzone').then(mod => mod.DropzoneArea), { ssr: false });

const CustomUpload = ({ Controller, register, control, error, children, defaultValue, ...inputProps }) => {
    const imageUrl = useRef();
    const { uploadFile, setUploadFile } = useState('')
    const handelImage = (event) => {
        const {
            validity,
            files: [file],
            name,
        } = event.target;
        if (validity.valid) {
            setUploadFile(file)
            imageUrl.current.src = URL.createObjectURL(event.target.files[0]);
            // if (file.type.split("/")[0] == name) {
            // } else {
            //     // enqueueSnackbar(`Invalid ${name}`, { variant: "error" });
            //     imageUrl.current.src = "/assets/images/no_img.jpg";
            // }
        } else {
            // enqueueSnackbar("Invalid File", { variant: "error" });
            imageUrl.current.src = "/assets/images/no_img.jpg";
        }
    };
    return (
        <FormControl fullWidth className="mb15 browse_img" error={(error ? true : false)} >
            {/* <InputLabel>{inputProps.label}</InputLabel> */}
            <Button variant="contained" component="label">
                {" "}
                <img
                    title="Level"
                    ref={imageUrl}
                    red
                    src={defaultValue ? defaultValue : "/assets/images/no_img.jpg"}
                />{" "}
                <Controller
                    control={control}
                    value={uploadFile}
                    {...inputProps}
                    as={
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={(e) => handelImage(e)}
                        />
                    }
                />
                {" "}
            </Button>
            <FormHelperText>{error ? error.message : null}</FormHelperText>
        </FormControl>
    )
}
export default CustomUpload;