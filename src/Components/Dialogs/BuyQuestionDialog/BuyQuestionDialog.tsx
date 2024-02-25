import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FC, useState} from "react";
import {ReactComponent as LinkLogo} from "../../assets/icon_place.svg";

export interface IBuyQuestionDialogProps {
    open: boolean
    onClose: ()=> void
}

export const BuyQuestionDialog:FC<IBuyQuestionDialogProps> = ({open, onClose}) => {

    const [openDialog, setOpenDialog] = useState(false)

    const handleClickOpen = () => {
        setOpenDialog(open);
    };

    const handleClose = () => {
        setOpenDialog(!open);
        onClose()
    };
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Связаться с отделом продаж"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{color: "black"}}>
                        Вы можете задать ваш вопрос на почту <text style={{color: "#3071E7"}}>manager@universe-soft.ru</text>
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{color: "black", alignItems: "center", display:"flex", marginTop: "5px"}}>
                        или позвонить по номеру <text style={{marginLeft:"5px",color: "#3071E7"}}>+7(495)150-21-52, доб. 1</text>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} autoFocus sx={{color: "black" }}>
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )

}