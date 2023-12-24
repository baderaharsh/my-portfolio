import { ContentCopy, Email, Phone } from "@mui/icons-material";
import { Avatar, Button, Dialog, DialogActions, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { ExternalUrls } from "../../../../constants/ExternalUrls";
import classes from "./ContactDialog.module.css";

interface Props {
    open: boolean;
    onClose: () => void;
};

export default function ContactDialog(props: Props) {

    return <Dialog className={classes.modal} open={props.open} onClose={props.onClose} fullWidth>
        <DialogTitle>Reach out via: </DialogTitle>
        <List>
            <ListItem key={ExternalUrls.EmailAddress} secondaryAction={<IconButton edge="end" onClick={() => {
                if (window.isSecureContext) {
                    navigator.clipboard.writeText(ExternalUrls.EmailAddress)
                }
            }}><ContentCopy /></IconButton>}>
                <ListItemAvatar>
                    <Avatar>
                        <Email />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={ExternalUrls.EmailAddress} />
            </ListItem>
        </List>
        <List>
            <ListItem key={ExternalUrls.Phone} secondaryAction={<IconButton edge="end" onClick={() => {
                if (window.isSecureContext) {
                    navigator.clipboard.writeText(ExternalUrls.Phone);
                }
            }}><ContentCopy /></IconButton>}>
                <ListItemAvatar>
                    <Avatar>
                        <Phone />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={ExternalUrls.Phone} />
            </ListItem>
        </List>
        <DialogActions>
            <Button onClick={props.onClose}>Close</Button>
        </DialogActions>
    </Dialog>
}