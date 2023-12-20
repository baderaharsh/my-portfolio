import { Button } from "@mui/material";
import { useState } from "react";
import ContactDialog from "./ContactDialog";
import classes from "./ContactButton.module.css"

export default function ContactButton() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <div className={classes.contactButton}>
        <Button variant="contained" style={{ color: "#F6F1F1", backgroundColor: "#0081B4" }} onClick={handleClickOpen} >Contact ME</Button>
        <ContactDialog open={open} onClose={handleClose} />
    </div>
}