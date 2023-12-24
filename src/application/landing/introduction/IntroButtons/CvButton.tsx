import { Button } from "@mui/material";
import classes from "./CvButton.module.css"
import { ExternalUrls } from "../../../../constants/ExternalUrls";
import btnClasses from "./ActionButtons.module.css"

export default function CvButton() {
    return <div className={classes.cvButton}>
        <Button className={btnClasses.actionButtons} variant="outlined" href={ExternalUrls.CV} target="_blank">Download CV</Button>
    </div>
}