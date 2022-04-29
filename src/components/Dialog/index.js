import React, {useState} from 'react';
import {Button, Dialog,DialogTitle,Divider,DialogContent,DialogActions} from '@mui/material';

function CustomDialog(props) {
    const [open,setOpen]=useState(false);
    const { onSave, label ,  confirmLabel,   cancelLabel ,children,title} = props;

    const handleClick = () => {
        setOpen(!open)
    }

    const handleSave =() =>{
        setOpen(false);
        if(onSave) {
            onSave();
        }
    }

    const handleCancel = () => {
        setOpen(false);
    }
    return (
        <>
            <Button onClick={handleClick}> {label} </Button>
            <Dialog open={open} onClose={handleClick} aria-describedby="dialog-title" aria-labelledby="dialog-content">
                <DialogTitle id="dialog-title"> {title}</DialogTitle>
                <DialogContent dividers id="dialog-content">
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>
                        {confirmLabel}
                    </Button>
                    <Button onClick={handleCancel}>
                        {cancelLabel}
                    </Button>
                </DialogActions>
            </Dialog>

            </>
    );
}
CustomDialog.defaultProps = {
    label: "Save",
    confirmLabel: "save1",
    cancelLabel: "cancel1",
    title: "title1"
}

export default CustomDialog;