import { Button } from "@mui/material";
import classes from "./ActionButtons.module.css"
import ContactDialog from "./ContactDialog";
import { useState } from "react";

 export default function ActionButtons() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <div className={classes.actionButtons}>
        <Button variant="contained" style={{color: "#F6F1F1", backgroundColor: "#0081B4"}} onClick={handleClickOpen} >Contact ME</Button>
        <ContactDialog open={open} onClose={handleClose} />
    </div>
 }