import { Button } from "@mui/material";
import classes from "./CvButton.module.css"
import { ExternalUrls } from "../../../constants/ExternalUrls";

export default function CvButton() {
    return <div className={classes.cvButton}>
        <Button variant="outlined" href={ExternalUrls.CV} target="_blank">Download CV</Button>
    </div>
}